import { ArrayCriancasTeste } from './../util/array-criancas-teste';
import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';

@Component({
  selector: 'app-menu-criancas',
  templateUrl: './menu-criancas.component.html',
  styleUrls: ['./menu-criancas.component.css']
})
export class MenuCriancasComponent implements OnInit {

  nomeCrianca? : string;
  criancas! : Crianca[];

  constructor() {
    // Instanciada Crianças via contrututor para atividade de input e output
    this.criancas = new ArrayCriancasTeste().criancas;
   }

  ngOnInit(): void {  }

  onSubmit() {
    alert(this.nomeCrianca);
    this.nomeCrianca = "";
  }
}
