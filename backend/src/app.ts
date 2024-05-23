import * as express from "express";
import * as cors from "cors";

import { Comic } from "./models/Comic";
import { Error } from './models/Error';
import { ErrorMsg } from "./ErrorMsg";
import { createComic, readComic, updateComic, deleteComic, insertComic} from "./services/ComicService";
import { createDB } from "./services/DBService";

export const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.options('*', cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

app.post('/comics', async function (req, res) {
    const comic = new Comic(req.body);
    let errors: Error[] = [];

    errors.push.apply(errors, ErrorMsg.comicErrorMsg(comic));
    console.log(errors);
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try { await insertComic(comic); }
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send();
});

app.get('/comics', async function (req, res) {
    let comics: Comic[] = [];
    try { comics = await readComic(); } 
    catch (e) {
        console.log(e);
        return res.status(500).send(e);
    }
    return res.status(200).send(comics);
});

app.put('/comics', async function (req, res) {
    const comic = new Comic(req.body);
    let errors: Error[] = [];
    errors.push.apply(errors, ErrorMsg.comicErrorMsg(comic));
    if (errors.length > 0) {
        console.log(errors);
        return res.status(500).send(errors);
    }
    try { await updateComic(comic); }
    catch (e) { return res.status(500).send(e); }
    return res.status(200).send();
});

app.delete('/comics/:comicId', async function (req, res) {
    const comicId = req.params.comicId;
    try { await deleteComic(comicId); } 
    catch (e) { return res.status(500).send(e); }
    return res.status(200).send();
});