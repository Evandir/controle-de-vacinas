import { CriancaVacina } from './../model/crianca-vacina';
import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancaPromiseService } from '../services/crianca-promise.service';
import { CriancaVacinaPromiseService } from '../services/crianca-vacina-promise.service';

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
    private criancaService: CriancaPromiseService,
    private criancaVacinaService: CriancaVacinaPromiseService
  ) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];

    this.criancaService.getById(idParam)
    .then((c) => {
      if (c != null) {
        this.crianca = c;
        this.criancaVacinaService.getByCriancaId(this.crianca.id)
        .then((cv) => {
          if (cv != null) {
            this.criancaVacinas = cv;
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

    let promises : Promise<CriancaVacina | undefined>[] = [];

    this.criancaVacinas.forEach ((cv) => {
      promises.push(this.criancaVacinaService.delete(cv.id));
    });

    Promise.all(promises)
    .then((cvs) => {
      this.criancaService.delete(this.crianca.id)
      .then((c) => {
        if (c != null) {
          this.crianca = c;
        };
        this.router.navigate(["/"]);
      })
    })
    .catch((e) => {
      this.isSuccess = false;
      this.message = e;
      this.isShowMessage = true;
      console.log(e);
    });
  }

}
