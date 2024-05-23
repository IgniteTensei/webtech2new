import { Comic } from '../models/Comic';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  comics: Comic[] = [];
  baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

    checkIsbnExists(isbn: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}/comics/isbnExists/${isbn}`);
    }

    createComic(comic: Comic): Observable<Comic> {
        return this.http.post<Comic>(this.baseURL + '/comics', comic);
    }
    readComic(): Observable<Comic[]> {
        return this.http.get<Comic[]>(this.baseURL + '/comics');
    }
    updateComic(comic: Comic): Observable<Comic> {
        return this.http.put<Comic>(this.baseURL + '/comics', comic);
    }
    deleteComic(comic: Comic): Observable<Comic> {
        return this.http.delete<Comic>(this.baseURL + '/comics/' + comic._id);
    }
}
