import { Crianca } from './../model/crianca';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CriancaStorageService } from '../services/crianca-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adiciona-crianca',
  templateUrl: './adiciona-crianca.component.html',
  styleUrls: ['./adiciona-crianca.component.css']
})
export class AdicionaCriancaComponent implements OnInit {

  @ViewChild('form') form!: NgForm;

  crianca! : Crianca;
  urlFoto? : String;

  regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

  constructor(private router: Router, private criancaService: CriancaStorageService) { }

  ngOnInit(): void {

    this.crianca = new Crianca(0, "", "", "", false, "");

    this.urlFoto = "/assets/resources/images/icons8-add-50.png";
  }

  onSubmit() {
    this.criancaService.save(this.crianca);
    this.form.reset();

    this.router.navigate(['/crianca' , this.crianca.id], { queryParams: { tipo: 'novo' } });
  }

  onRadioClick(sexo : String) {
    if (sexo == "Menino") {
      this.urlFoto = "/assets/resources/images/icons8-boy-64.png";
    } else {
      this.urlFoto = "/assets/resources/images/icons8-girl-64.png";
    }
  }

}
