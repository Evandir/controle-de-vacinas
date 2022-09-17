import { Crianca } from './../model/crianca';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icone-crianca',
  templateUrl: './icone-crianca.component.html',
  styleUrls: ['./icone-crianca.component.css']
})
export class IconeCriancaComponent implements OnInit {
  urlFoto! : string;
  // Criança recebida do componente pai
  @Input() crianca! : Crianca;

  constructor() { }

  ngOnInit(): void {
    if (this.crianca.sexo == "Menino") {
      this.urlFoto = "assets/resources/images/icons8-boy-64.png";
    } else {
      this.urlFoto = "assets/resources/images/icons8-girl-64.png";
    }
  }

}
