import { CriancaVacina } from './../model/crianca-vacina';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Crianca } from '../model/crianca';
import { CriancaVacinaService } from '../services/crianca-vacina.service';
import { CriancaService } from '../services/crianca.service';

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
    private criancaService: CriancaService,
    private criancaVacinaService: CriancaVacinaService
  ) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];

    this.route.queryParams.subscribe((params) => {
      if (params['tipo'] == 'novo') {
        this.isShowMessage = true;
        this.isSuccess = true;
        this.message = 'Cadastro realizado com sucesso!';
      }
    });

    this.criancaService.getById(idParam)
    .subscribe((values) => {
      if (values != null) {
        this.crianca = values;

        if (this.crianca.sexo == "Menino") {
          this.urlFoto = "assets/resources/images/icons8-boy-64.png"
        } else {
          this.urlFoto = "assets/resources/images/icons8-girl-64.png"
        }

        this.criancaVacinaService.getByCriancaId(this.crianca.id)
        .subscribe({
          next : (cv) => {
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
          },
          error : err => {
            this.isShowMessage = true;
            this.isSuccess = false;
            this.message = err;
          }
        });
      };
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
    .subscribe({
      next : (value) => {
        if (value != null) {
            this.vacinasRecebidas.push(value);
            this.vacinasPlanejadas = this.vacinasPlanejadas.filter((cv) => cv.id != value.id);
        }
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

  desmarcaVacina(v: CriancaVacina) {
    v.recebida = false;
    v.dataRecebida = "";

    this.criancaVacinaService.update(v)
    .subscribe({
      next : (value) => {
        if (value != null) {
          this.vacinasPlanejadas.push(value);
          this.vacinasRecebidas = this.vacinasRecebidas.filter((cv) => cv.id != value.id);
        }
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

}
