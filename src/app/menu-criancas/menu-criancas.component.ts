import { CriancaPromiseService } from './../services/crianca-promise.service';
import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-criancas',
  templateUrl: './menu-criancas.component.html',
  styleUrls: ['./menu-criancas.component.css']
})
export class MenuCriancasComponent implements OnInit {

  nomeCrianca? : string;
  criancas! : Crianca[];

  constructor(
    private router: Router,
    private criancaService: CriancaPromiseService) { }

  ngOnInit(): void {

    this.criancaService.getCriancas()
    .then((values) => {
      if (values != null) {
        this.criancas = values;
      };
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      console.log('A operação foi finalizada!');
    });
  }

  onSubmit() {
    this.router.navigate(['/crianca']);
  }
}
