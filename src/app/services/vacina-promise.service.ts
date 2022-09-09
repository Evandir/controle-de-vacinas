import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaPromiseService {

  URL = 'http://localhost:3000/vacinas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  getById(id: number) {
    return this.httpClient.get<Vacina>(`${this.URL}/${id}`).toPromise();
  }

  getVacinas() {
    return this.httpClient.get<Vacina[]>(`${this.URL}`).toPromise();
  }

  save(vacina: Vacina) {
    return this.httpClient
      .post<Vacina>(
        this.URL,
        JSON.stringify(vacina),
        this.httpOptions
      )
      .toPromise();
  }

  patch(vacina: Vacina) {
    return this.httpClient
      .patch<Vacina>(
        this.URL,
        JSON.stringify(vacina),
        this.httpOptions
      )
      .toPromise();
  }

  update(vacina: Vacina) {
    return this.httpClient
      .put<Vacina>(this.URL, JSON.stringify(vacina), this.httpOptions)
      .toPromise();
  }

  delete(id: number) {
    return this.httpClient.delete<Vacina>(`${this.URL}/${id}`).toPromise();
  }
}
