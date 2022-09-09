import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriancaVacina } from '../model/crianca-vacina';
import { Vacina } from '../model/vacina';
import { CriancaPromiseService } from '../services/crianca-promise.service';
import { VacinaPromiseService } from '../services/vacina-promise.service';
import { CriancaVacinaPromiseService } from '../services/crianca-vacina-promise.service';

@Component({
  selector: 'app-adiciona-vacina',
  templateUrl: './adiciona-vacina.component.html',
  styleUrls: ['./adiciona-vacina.component.css']
})
export class AdicionaVacinaComponent implements OnInit {

  crianca! : Crianca;
  urlFoto! : String;
  vacinas : Vacina[] = [];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private route: ActivatedRoute,
    private criancaService: CriancaPromiseService,
    private vacinaService: VacinaPromiseService,
    private criancaVacinaService: CriancaVacinaPromiseService
  ) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];

    this.criancaService.getById(idParam)
    .then((c) => {
      if (c != null) {
        this.crianca = c;
        this.criancaVacinaService.getByCriancaId(this.crianca.id)
        .then((cvs) => {
          if (cvs != null) {
            this.vacinaService.getVacinas()
            .then((values) => {
              if (values != null) {
                values.forEach((v) => {
                  let achou = false;
                  cvs.forEach((cv) => {
                    if (v.id == cv.vacina.id) {
                      achou = true;
                    }
                  });
                  if (!achou) {
                    this.vacinas.push(v);
                  }
                });
              }
            });
          }
        });
      };


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
    return dataVacina.getDate() < hoje.getDate();
  }

  addVacina(v : Vacina) {
    let criancaVacina = new CriancaVacina(0, this.crianca, v);
    // this.crianca.vacinas.push(criancaVacina);

    this.criancaVacinaService.save(criancaVacina)
    .then((value) => {
      if (value != null) {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = "Vacina adcionada à Crianca!";
        this.vacinas = this.vacinas.filter((vacina) => vacina.id != v.id);
      }
    }
    );
  }

}
