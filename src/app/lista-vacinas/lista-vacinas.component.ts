import { ArrayVacinas } from './../util/array-vacinas';
import { Vacina } from './../model/vacina';
import { Component, OnInit } from '@angular/core';
import { VacinaPromiseService } from '../services/vacina-promise.service';

@Component({
  selector: 'app-lista-vacinas',
  templateUrl: './lista-vacinas.component.html',
  styleUrls: ['./lista-vacinas.component.css']
})
export class ListaVacinasComponent implements OnInit {

  vacinas! : Vacina[];

  constructor(private vacinaPromiseService : VacinaPromiseService) {
  }

  ngOnInit(): void {
    this.vacinaPromiseService
      .getVacinas()
      .then((vacinas) => {
        if (vacinas != undefined) {
          this.vacinas = vacinas;
        }
      });
  }

}
