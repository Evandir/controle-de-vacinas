import { catchError, Observable, retry } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crianca } from '../model/crianca';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class CriancaService {

  URL = 'http://localhost:3000/criancas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getById(id: number) : Observable<Crianca> {
    return this.httpClient.get<Crianca>(`${this.URL}/${id}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  getCriancas() : Observable<Crianca[]> {
    return this.httpClient.get<Crianca[]>(`${this.URL}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  save(crianca: Crianca) : Observable<Crianca> {
    return this.httpClient
      .post<Crianca>(
        this.URL,
        JSON.stringify(crianca),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  patch(crianca: Crianca) : Observable<Crianca> {
    return this.httpClient
      .patch<Crianca>(
        this.URL,
        JSON.stringify(crianca),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  update(crianca: Crianca) : Observable<Crianca> {
    return this.httpClient
      .put<Crianca>(this.URL, JSON.stringify(crianca), this.httpOptions)
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  delete(id: number) : Observable<Crianca> {
    return this.httpClient.delete<Crianca>(`${this.URL}/${id}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }
}
