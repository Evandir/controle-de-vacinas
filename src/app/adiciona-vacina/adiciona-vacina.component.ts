import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CriancaVacina } from '../model/crianca-vacina';
import { Vacina } from '../model/vacina';
import { VacinaService } from '../services/vacina.service';
import { CriancaService } from '../services/crianca.service';
import { CriancaVacinaService } from '../services/crianca-vacina.service';
import { filter } from 'rxjs';

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
    private criancaService: CriancaService,
    private vacinaService: VacinaService,
    private criancaVacinaService: CriancaVacinaService
  ) {  }

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      if (params['tipo'] == 'novo') {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro realizado com sucesso!';
      }
    });

    let idParam = +this.route.snapshot.params['id'];

    this.criancaService.getById(idParam)
    .subscribe({
      next : (c) => {
        if (c != null) {
          this.crianca = c;
          this.criancaVacinaService.getByCriancaId(this.crianca.id)
          .subscribe((vacinasDaCrianca) => {
            if (vacinasDaCrianca != null) {
              this.vacinaService.getVacinas()
              .subscribe({
                next : (todasVacinas) => {0
                  if (todasVacinas != null) {
                    todasVacinas.forEach((v) => {
                      let achou = false;
                      vacinasDaCrianca.forEach((cv) => {
                        if (v.id == cv.vacina.id) {
                          achou = true;
                        }
                      });
                      if (!achou) {
                        this.vacinas.push(v);
                      }
                    });
                  }
                },
                error : err => {
                  this.isShowMessage = true;
                  this.isSuccess = false;
                  this.message = err;
                }
              });
            }
          });
        };

        if (this.crianca.sexo == "Menino") {
          this.urlFoto = "assets/resources/images/icons8-boy-64.png"
        } else {
          this.urlFoto = "assets/resources/images/icons8-girl-64.png"
        }
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
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
    .subscribe((value) => {
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
