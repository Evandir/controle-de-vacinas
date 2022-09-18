import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry } from 'rxjs';
import { Vacina } from '../model/vacina';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  URL = 'http://localhost:3000/vacinas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getById(id: number) : Observable<Vacina> {
    return this.httpClient.get<Vacina>(`${this.URL}/${id}`)
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  getVacinas() : Observable<Vacina[]> {
    return this.httpClient.get<Vacina[]>(`${this.URL}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  save(vacina: Vacina)  : Observable<Vacina> {
    return this.httpClient
      .post<Vacina>(
        this.URL,
        JSON.stringify(vacina),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  patch(vacina: Vacina) : Observable<Vacina> {
    return this.httpClient
      .patch<Vacina>(
        this.URL,
        JSON.stringify(vacina),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  update(vacina: Vacina) : Observable<Vacina> {
    return this.httpClient
      .put<Vacina>(this.URL, JSON.stringify(vacina), this.httpOptions)
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  delete(id: number) : Observable<Vacina> {
    return this.httpClient.delete<Vacina>(`${this.URL}/${id}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }
}
