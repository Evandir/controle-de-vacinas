import { Crianca } from './../model/crianca';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CriancaService } from '../services/crianca.service';

@Component({
  selector: 'app-adiciona-crianca',
  templateUrl: './adiciona-crianca.component.html',
  styleUrls: ['./adiciona-crianca.component.css']
})
export class AdicionaCriancaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  crianca! : Crianca;
  urlFoto? : String;

  isShowMessage: boolean = false;
  isSuccess!: boolean;
  message!: string;

  regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

  constructor(
    private router: Router,
    private criancaService: CriancaService
  ) { }

  ngOnInit(): void {

    this.crianca = new Crianca(0, "", "", "", false, "");

    this.urlFoto = "/assets/resources/images/icons8-add-50.png";
  }

  onSubmit() {

    this.criancaService.save(this.crianca)
    .subscribe({
      next : (values) => {
        if (values != null) {
          this.crianca = values;
          this.router.navigate(['/crianca' , this.crianca.id], { queryParams: { tipo: 'novo' } });
        } else {
          this.isSuccess = false;
          this.message = "Não foi possível adicionar a Criança";
          this.isShowMessage = true;
          console.log("Não foi possível adicionar a Criança");
          this.form.reset();
        }
      },
      error : err => {
        this.isShowMessage = true;
        this.isSuccess = false;
        this.message = err;
      }
    });
  }

  onRadioClick(sexo : String) {
    if (sexo == "Menino") {
      this.urlFoto = "/assets/resources/images/icons8-boy-64.png";
    } else {
      this.urlFoto = "/assets/resources/images/icons8-girl-64.png";
    }
  }

}
