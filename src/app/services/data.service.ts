import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meetup } from '../models/meetup';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
  private baseUrl = 'api/meetups';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getMeetups(): Observable<Meetup[]> {
    return this.http.get<Meetup[]>(this.baseUrl)
      .pipe(
        tap(meetups => this.log(`fetched meetups`)),
        catchError(this.handleError('getMeetups', []))
      );
  }

  /** GET meetup by id. Will 404 if id not found */
  getMeetup(id: number): Observable<Meetup> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Meetup>(url).pipe(
      tap(_ => this.log(`fetched meetup id=${id}`)),
      catchError(this.handleError<Meetup>(`getMeetup id=${id}`))
    );
  }

  /** POST: add a new meetup to the server */
  addMeetup (meetup: Meetup): Observable<Meetup> {
    return this.http.post<Meetup>(this.baseUrl, meetup, httpOptions).pipe(
      tap((meetup: Meetup) => this.log(`added meetup w/ id=${meetup.id}`)),
      catchError(this.handleError<Meetup>('addMeetup'))
    );
  }

  /** PUT: update the meetup on the server */
  updateMeetup (meetup: Meetup): Observable<any> {
    return this.http.put(this.baseUrl, meetup, httpOptions).pipe(
      tap(_ => this.log(`updated meetup id=${meetup.id}`)),
      catchError(this.handleError<any>('updateMeetup'))
    );
  }

  /** DELETE: delete the meetup from the server */
  deleteMeetup (meetup: Meetup | number): Observable<Meetup> {
    const id = typeof meetup === 'number' ? meetup : meetup.id;
    const url = `${this.baseUrl}/${id}`;

    return this.http.delete<Meetup>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted meetup id=${id}`)),
      catchError(this.handleError<Meetup>('deleteMeetup'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DataService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DataService: ' + message);
  }
}
