import { Crianca } from './../model/crianca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icone-crianca',
  templateUrl: './icone-crianca.component.html',
  styleUrls: ['./icone-crianca.component.css']
})
export class IconeCriancaComponent implements OnInit {
  urlFoto! : string;
  // Instanciada Criança para teste de property bind
  crianca = new Crianca("João", "01/07/2012", "Masculino", false, "Sul");

  constructor() { }

  ngOnInit(): void {
    if (this.crianca.sexo == "Masculino") {
      this.urlFoto = "/assets/resources/images/icons8-boy-64.png";
    } else {
      this.urlFoto = "/assets/resources/images/icons8-girl-64.png";
    }
  }

}
