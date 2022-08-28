import { ArrayCriancasTeste } from './../util/array-criancas-teste';
import { CriancaVacina } from './../model/crianca-vacina';
import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vacina } from '../model/vacina';

@Component({
  selector: 'app-crianca-detalhe',
  templateUrl: './crianca-detalhe.component.html',
  styleUrls: ['./crianca-detalhe.component.css']
})
export class CriancaDetalheComponent implements OnInit {

  crianca! : Crianca;
  urlFoto! : String;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];
    // Pegar a Criança do array de crianças instaciado na classe teste
    let criancas = new ArrayCriancasTeste().criancas;

    this.crianca = criancas.filter((c) => {return c.id === idParam})[0];

    if (this.crianca.sexo == "Menino") {
      this.urlFoto = "/assets/resources/images/icons8-boy-64.png"
    } else {
      this.urlFoto = "/assets/resources/images/icons8-girl-64.png"
    }
  }

  isAlergica(alergia: boolean) {
    if (alergia) {
      return "Sim";
    } else {
      return "Não";
    }
  }

  isVacinaEmDia(recebida : boolean) {
    if (recebida) {
      return "";
    } else {
      return "ATRASADA";
    }
  }

}
