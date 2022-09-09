import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crianca } from '../model/crianca';

@Injectable({
  providedIn: 'root'
})
export class CriancaPromiseService {

  URL = 'http://localhost:3000/criancas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getById(id: number) {
    return this.httpClient.get<Crianca>(`${this.URL}/${id}`).toPromise();
  }

  getCriancas() {
    return this.httpClient.get<Crianca[]>(`${this.URL}`).toPromise();
  }

  save(crianca: Crianca) {
    return this.httpClient
      .post<Crianca>(
        this.URL,
        JSON.stringify(crianca),
        this.httpOptions
      )
      .toPromise();
  }

  patch(crianca: Crianca) {
    return this.httpClient
      .patch<Crianca>(
        this.URL,
        JSON.stringify(crianca),
        this.httpOptions
      )
      .toPromise();
  }

  update(crianca: Crianca) {
    return this.httpClient
      .put<Crianca>(this.URL, JSON.stringify(crianca), this.httpOptions)
      .toPromise();
  }

  delete(id: number) {
    return this.httpClient.delete<Crianca>(`${this.URL}/${id}`).toPromise();
  }
}
