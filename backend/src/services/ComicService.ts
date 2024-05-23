import { Comic } from "../models/Comic";
import { mongoDBService } from "./MongoDBService";
import { ObjectId } from "mongodb";

//CRUD

export async function createComic() {
    await mongoDBService.createCollection("Comic");
}

export async function readComic(): Promise<Comic[]> {
    return await mongoDBService.listCollection("Comic", {}, {});
}

export async function updateComic(comic: Comic) {
    await mongoDBService.updateOneCollection("Comic", { _id: new ObjectId(comic._id) }, {});
}

export async function deleteComic(comicID: string) {
    await mongoDBService.deleteOneCollection("Comic", { _id: new ObjectId(comicID) });
}

export async function insertComic(comic: Comic) {
    await mongoDBService.insertOneCollection("Comic", comic);
}