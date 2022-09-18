import { catchError, Observable, retry } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriancaVacina } from '../model/crianca-vacina';
import { ErrorUtil } from '../util/error-util';

@Injectable({
  providedIn: 'root'
})
export class CriancaVacinaService {

  URL = 'http://localhost:3000/criancaVacinas';
  URL_CRIANCA = 'http://localhost:3000/criancas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getByCriancaId(id: number) : Observable<CriancaVacina[]> {
    return this.httpClient.get<CriancaVacina[]>(`${this.URL_CRIANCA}/${id}/vacinas`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  save(criancaVacina: CriancaVacina) : Observable<CriancaVacina> {
    return this.httpClient
      .post<CriancaVacina>(
        this.URL,
        JSON.stringify(criancaVacina),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  patch(criancaVacina: CriancaVacina) : Observable<CriancaVacina> {
    return this.httpClient
      .patch<CriancaVacina>(
        this.URL,
        JSON.stringify(criancaVacina),
        this.httpOptions
      )
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  update(criancaVacina: CriancaVacina) : Observable<CriancaVacina> {
    return this.httpClient
      .put<CriancaVacina>(`${this.URL}/${criancaVacina.id}`, JSON.stringify(criancaVacina), this.httpOptions)
      .pipe(retry(3), catchError(ErrorUtil.handleError));
  }

  delete(id: number) : Observable<CriancaVacina> {
    return this.httpClient.delete<CriancaVacina>(`${this.URL}/${id}`)
    .pipe(retry(3), catchError(ErrorUtil.handleError));
  }
}
