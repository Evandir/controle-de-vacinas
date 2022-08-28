import { ArrayCriancasTeste } from './../util/array-criancas-teste';
import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';

@Component({
  selector: 'app-lista-criancas',
  templateUrl: './lista-criancas.component.html',
  styleUrls: ['./lista-criancas.component.css']
})
export class ListaCriancasComponent implements OnInit {

  criancas! : Crianca[];

  constructor() {
    //Pega as crianças da classe de teste
    this.criancas = new ArrayCriancasTeste().criancas;
   }

  ngOnInit(): void {
  }

}
