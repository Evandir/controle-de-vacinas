import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { CriancaPromiseService } from '../services/crianca-promise.service';

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

  constructor(private criancaService: CriancaPromiseService) {

  }

  ngOnInit(): void {

    this.criancaService
      .getCriancas()
      .then((criancas) => {
        if (criancas != null) {
          this.criancas = criancas;
        };
        if (!(this.criancas.length > 0)) {
          this.isSuccess = false;
          this.message = "Não há Crianças Cadastradas!";
          this.isShowMessage = true;
        };
      })
      .catch((e) => {
        this.isSuccess = false;
        this.message = e;
        this.isShowMessage = true;
        console.log(e);
      })
      .finally(() => {
        console.log('A operação foi finalizada!');
      });
  }

}
