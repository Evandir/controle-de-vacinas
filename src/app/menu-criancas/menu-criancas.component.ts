import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';

@Component({
  selector: 'app-menu-criancas',
  templateUrl: './menu-criancas.component.html',
  styleUrls: ['./menu-criancas.component.css']
})
export class MenuCriancasComponent implements OnInit {

  nomeCrianca? : string;
  criancas! : Crianca[];

  constructor() { }

  ngOnInit(): void {  }

  onSubmit() {
    alert(this.nomeCrianca);
    this.nomeCrianca = "";
  }
}
