import { CriancaVacina } from './../model/crianca-vacina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crianca } from '../model/crianca';
import { CriancaPromiseService } from '../services/crianca-promise.service';
import { Vacina } from '../model/vacina';
import { VacinaPromiseService } from '../services/vacina-promise.service';
import { CriancaVacinaPromiseService } from '../services/crianca-vacina-promise.service';

@Component({
  selector: 'app-crianca-vacinas',
  templateUrl: './crianca-vacinas.component.html',
  styleUrls: ['./crianca-vacinas.component.css']
})
export class CriancaVacinasComponent implements OnInit {

  crianca! : Crianca;
  urlFoto! : String;
  vacinasPlanejadas : CriancaVacina[] = [];
  vacinasRecebidas : CriancaVacina[] = [];
  criancaVacinas! : CriancaVacina[];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private criancaService: CriancaPromiseService,
    private criancaVacinaService: CriancaVacinaPromiseService
  ) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];

    this.criancaService.getById(idParam)
    .then((values) => {
      if (values != null) {
        this.crianca = values;
        this.route.queryParams.subscribe((params) => {
          if (params['tipo'] == 'novo') {
            this.isShowMessage = true;
            this.isSuccess = true;
            this.message = 'Cadastro realizado com sucesso!';
          }
        });

        if (this.crianca.sexo == "Menino") {
          this.urlFoto = "/assets/resources/images/icons8-boy-64.png"
        } else {
          this.urlFoto = "/assets/resources/images/icons8-girl-64.png"
        }

        this.criancaVacinaService.getByCriancaId(this.crianca.id)
        .then((cv) => {
          if (cv != null) {
            this.criancaVacinas = cv;
            this.criancaVacinas.forEach((cv) => {
              if (cv.recebida) {
                this.vacinasRecebidas.push(cv);
              } else {
                this.vacinasPlanejadas.push(cv);
              }
            });
          }
        });
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

  isVacinaAtrasada(cv : CriancaVacina): boolean {
    if (cv.recebida) {
      return false;
    }
    let hoje = new Date();
    let dataVacina = new Date(cv.dataPlanejada);
    return dataVacina.getTime() < hoje.getTime();
  }

  marcaVacina(v: CriancaVacina) {
    v.recebida = true;
    v.dataRecebida = new Date().toString();

    this.criancaVacinaService.update(v)
    .then((value) => {
      if (value != null) {
          this.vacinasRecebidas.push(value);
          this.vacinasPlanejadas = this.vacinasPlanejadas.filter((cv) => cv.id != value.id);
      }
    });
  }

  desmarcaVacina(v: CriancaVacina) {
    v.recebida = false;
    v.dataRecebida = "";

    this.criancaVacinaService.update(v)
    .then((value) => {
      if (value != null) {
        this.vacinasPlanejadas.push(value);
        this.vacinasRecebidas = this.vacinasRecebidas.filter((cv) => cv.id != value.id);
      }
    });
  }

}
