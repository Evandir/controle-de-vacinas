import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { Router } from '@angular/router';
import { CriancaStorageService } from '../services/crianca-storage.service';

@Component({
  selector: 'app-menu-criancas',
  templateUrl: './menu-criancas.component.html',
  styleUrls: ['./menu-criancas.component.css']
})
export class MenuCriancasComponent implements OnInit {

  nomeCrianca? : string;
  criancas! : Crianca[];

  constructor(private router: Router, private criancaService: CriancaStorageService) {

  }

  ngOnInit(): void {
    this.criancas = this.criancaService.getCriancas();
  }

  onSubmit() {
    this.router.navigate(['/crianca']);
  }
}
