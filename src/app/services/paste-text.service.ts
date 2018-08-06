import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { PasteText } from '../models/paste-text.model';
import { Language } from '../models/language.model';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PasteTextService {

  private pasteTextUrl = 'api/pasteText';  // URL to web api
  private langugesUrl = 'api/languages';  // URL to web api
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  getPasteText(hash: string = ''): Observable<PasteText[]> {
    return this.http.get<PasteText[]>(this.pasteTextUrl + '/' + hash)
      .pipe(
        tap(pasteText => console.log('fetched pasteText')),
        catchError(this.handleError('pasteText', []))
      );
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.langugesUrl)
      .pipe(
        tap(languages => console.log('fetched languages')),
        catchError(this.handleError('languages', []))
      );
  }

  /** POST: add a new pasteText to the server */
  addPasteText (pasteText: PasteText): Observable<PasteText> {
    return this.http.post<PasteText>(this.apiUrl, pasteText, httpOptions).pipe(
      tap((pasteText: PasteText) => console.log(`added pasteText w/ id=${pasteText.hash}`)),
      catchError(this.handleError<PasteText>('addPasteText'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
