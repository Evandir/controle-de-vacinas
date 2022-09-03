import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CriancaStorageService } from '../services/crianca-storage.service';

@Component({
  selector: 'app-crianca-detalhe',
  templateUrl: './crianca-detalhe.component.html',
  styleUrls: ['./crianca-detalhe.component.css']
})
export class CriancaDetalheComponent implements OnInit {

  crianca! : Crianca;
  urlFoto! : String;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  constructor(private router: Router, private route: ActivatedRoute, private criancaService: CriancaStorageService) {  }

  ngOnInit(): void {
    let idParam = +this.route.snapshot.params['id'];

    this.crianca = this.criancaService.getCrianca(idParam);

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
      return " - ATRASADA";
    }
  }

  delete() {
    this.criancaService.deleteCrianca(this.crianca.id);
    this.router.navigate(["/"]);
  }

}
