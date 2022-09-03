import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { CriancaStorageService } from '../services/crianca-storage.service';

@Component({
  selector: 'app-lista-criancas',
  templateUrl: './lista-criancas.component.html',
  styleUrls: ['./lista-criancas.component.css']
})
export class ListaCriancasComponent implements OnInit {

  criancas! : Crianca[];

  constructor(private criancaService: CriancaStorageService) {

  }

  ngOnInit(): void {
    this.criancas = this.criancaService.getCriancas();
  }

}
