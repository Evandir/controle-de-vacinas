import { Crianca } from './../model/crianca';
import { Injectable } from '@angular/core';
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

  getCriancas(): Promise<Crianca[]> {

    const p = new Promise<Crianca[]>((resolve, reject) => {
      this.criancas = WebStorageUtil.get("criancas");
      resolve(this.criancas);
    });
    return p;
  }

  save(crianca: Crianca): Promise<Crianca> {
    const p = new Promise<Crianca>((resolve, reject) => {
      if (localStorage.getItem("criancas") != null) {
        this.criancas = WebStorageUtil.get("criancas");
      } else {
        this.criancas = [];
      }
      // crianca.id = this.criancas.length;
      this.criancas.push(crianca);
      WebStorageUtil.set("criancas", this.criancas);
      resolve(crianca);
    });
    return p;
  }

  getCrianca(id : number): Promise<Crianca> {
    const p = new Promise<Crianca>((resolve, reject) => {
      this.criancas = WebStorageUtil.get("criancas");
      const crianca = this.criancas.find((c) => {return c.id === id});
      if (crianca == undefined) {
        reject("Criança não localizada!");
      } else {
        resolve(crianca);
      }
    });
    return p;
  }

  deleteCrianca(id: number): Promise<boolean> {
    const p = new Promise<boolean>((resolve, reject) => {
      this.criancas = WebStorageUtil.get("criancas");
      this.criancas = this.criancas.filter((c) => {return c.id != id})
      WebStorageUtil.set("criancas", this.criancas);
      resolve(true);
    });
    return p;
  }

}
