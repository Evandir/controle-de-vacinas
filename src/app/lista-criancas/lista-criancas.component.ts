import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { CriancaService } from '../services/crianca.service';

@Component({
  selector: 'app-lista-criancas',
  templateUrl: './lista-criancas.component.html',
  styleUrls: ['./lista-criancas.component.css']
})
export class ListaCriancasComponent implements OnInit {

  criancas! : Crianca[];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private criancaService: CriancaService) {

  }

  ngOnInit(): void {

    this.criancaService.getCriancas()
    .subscribe({
      next : (criancas) => {
        if (criancas != null) {
          this.criancas = criancas;
        };
        if (!(this.criancas.length > 0)) {
          this.isSuccess = false;
          this.message = "Não há Crianças Cadastradas!";
          this.isShowMessage = true;
        };
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

}
