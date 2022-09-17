import { Vacina } from './../model/vacina';
import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../services/vacina.service';

@Component({
  selector: 'app-lista-vacinas',
  templateUrl: './lista-vacinas.component.html',
  styleUrls: ['./lista-vacinas.component.css']
})
export class ListaVacinasComponent implements OnInit {

  vacinas! : Vacina[];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private vacinaService : VacinaService) {
  }

  ngOnInit(): void {

    this.vacinaService.getVacinas()
    .subscribe({
      next : (vacinas) => this.vacinas = vacinas,
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

}
