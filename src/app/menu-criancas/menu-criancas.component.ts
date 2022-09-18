import { Component, OnInit } from '@angular/core';
import { Crianca } from '../model/crianca';
import { Router } from '@angular/router';
import { CriancaService } from '../services/crianca.service';

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
    private criancaService: CriancaService) { }

  ngOnInit(): void {

    this.criancaService.getCriancas()
    .subscribe(
      {
      next : (values) => {
        if (values != null) {
          this.criancas = values;
        };
      },
      error : err => console.log(err),
      complete : () => console.log('A operação foi completa')
    });
  }

  onSubmit() {
    this.router.navigate(['/crianca']);
  }
}
