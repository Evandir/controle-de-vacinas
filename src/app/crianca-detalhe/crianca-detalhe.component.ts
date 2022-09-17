import { CriancaVacina } from './../model/crianca-vacina';
import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancaService } from '../services/crianca.service';
import { CriancaVacinaService } from '../services/crianca-vacina.service';

@Component({
  selector: 'app-crianca-detalhe',
  templateUrl: './crianca-detalhe.component.html',
  styleUrls: ['./crianca-detalhe.component.css']
})
export class CriancaDetalheComponent implements OnInit {

  crianca! : Crianca;
  urlFoto! : String;
  criancaVacinas! : CriancaVacina[];

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private criancaService: CriancaService,
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
          .subscribe({
            next : (cv) => {
              if (cv != null) {
                this.criancaVacinas = cv;
              }
            },
            error : err => {
              this.isShowMessage = true;
              this.isSuccess = false;
              this.message = err;
            }
          });
        };

        if (this.crianca.sexo == "Menino") {
          this.urlFoto = "/assets/resources/images/icons8-boy-64.png"
        } else {
          this.urlFoto = "/assets/resources/images/icons8-girl-64.png"
        };
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

  isAlergica(alergia: boolean) {
    if (alergia) {
      return "Sim";
    } else {
      return "Não";
    }
  }

  isVacinaEmDia(recebida : boolean): String {
    if (recebida) {
      return "";
    } else {
      return " - ATRASADA";
    }
  }

  isVacinaAtrasada(cv : CriancaVacina): boolean {
    if (cv.recebida) {
      return false;
    }
    let hoje = new Date();
    let dataVacina = new Date(cv.dataPlanejada);
    return dataVacina.getTime() < hoje.getTime();
  }

  delete() {

    this.criancaVacinas.forEach ((cv) => {
      this.criancaVacinaService.delete(cv.id).subscribe({
        error : err => {
          this.isShowMessage = true;
          this.isSuccess = false;
          this.message = err;
        }
      });
    });

    this.criancaService.delete(this.crianca.id)
    .subscribe({
      next :(c) => {
        if (c != null) {
          this.crianca = c;
        };
        this.router.navigate(["/"]);
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

}
