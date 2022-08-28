import { ArrayVacinas } from './../util/array-vacinas';
import { Vacina } from './../model/vacina';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vacinas',
  templateUrl: './lista-vacinas.component.html',
  styleUrls: ['./lista-vacinas.component.css']
})
export class ListaVacinasComponent implements OnInit {

  vacinas : Vacina[];

  constructor() {
    this.vacinas = new ArrayVacinas().vacinas;
   }

  ngOnInit(): void {
  }

}
