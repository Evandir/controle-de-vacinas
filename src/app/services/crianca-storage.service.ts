import { Injectable } from '@angular/core';
import { Crianca } from '../model/crianca';
import { WebStorageUtil } from '../util/web-storage-util';

@Injectable({
  providedIn: 'root'
})
export class CriancaStorageService {

  criancas!: Crianca[];
  // private userSource!: BehaviorSubject<number>;

  constructor() {
    this.criancas = WebStorageUtil.get("criancas");
    // this.userSource = new BehaviorSubject<number>(this.users.length);
  }

  getCriancas(): Crianca[] {

    // if (localStorage.getItem("criancas") != null) {
      this.criancas = WebStorageUtil.get("criancas");
    // } else {
      // this.criancas = [];
    // }
    return this.criancas;
  }

  save(crianca: Crianca) {
    if (localStorage.getItem("criancas") != null) {
      this.criancas = WebStorageUtil.get("criancas");
    } else {
      this.criancas = [];
    }
    crianca.id = this.criancas.length;
    this.criancas.push(crianca);
    WebStorageUtil.set("criancas", this.criancas);
  }

  getCrianca(id : number): Crianca {
    this.criancas = WebStorageUtil.get("criancas");
    return this.criancas.filter((c) => {return c.id === id})[0];
  }

  deleteCrianca(id: number) {
    this.criancas = WebStorageUtil.get("criancas");
    this.criancas = this.criancas.filter((c) => {return c.id != id})
    WebStorageUtil.set("criancas", this.criancas);
  }

}
