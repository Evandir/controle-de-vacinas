import { CriancaVacina } from './../model/crianca-vacina';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CriancaVacinaPromiseService {

  URL = 'http://localhost:3000/criancaVacinas';
  URL_CRIANCA = 'http://localhost:3000/criancas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getByCriancaId(id: number) {
    return this.httpClient.get<CriancaVacina[]>(`${this.URL_CRIANCA}/${id}/vacinas`).toPromise();
  }

  save(criancaVacina: CriancaVacina) {
    return this.httpClient
      .post<CriancaVacina>(
        this.URL,
        JSON.stringify(criancaVacina),
        this.httpOptions
      )
      .toPromise();
  }

  patch(criancaVacina: CriancaVacina) {
    return this.httpClient
      .patch<CriancaVacina>(
        this.URL,
        JSON.stringify(criancaVacina),
        this.httpOptions
      )
      .toPromise();
  }

  update(criancaVacina: CriancaVacina) {
    return this.httpClient
      .put<CriancaVacina>(`${this.URL}/${criancaVacina.id}`, JSON.stringify(criancaVacina), this.httpOptions)
      .toPromise();
  }

  delete(id: number) {
    return this.httpClient.delete<CriancaVacina>(`${this.URL}/${id}`).toPromise();
  }
}
