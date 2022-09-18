import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionaCriancaComponent } from './adiciona-crianca/adiciona-crianca.component';
import { AdicionaVacinaComponent } from './adiciona-vacina/adiciona-vacina.component';
import { CriancaDetalheComponent } from './crianca-detalhe/crianca-detalhe.component';
import { CriancaVacinasComponent } from './crianca-vacinas/crianca-vacinas.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaCriancasComponent } from './lista-criancas/lista-criancas.component';
import { ListaVacinasComponent } from './lista-vacinas/lista-vacinas.component';

const routes: Routes = [
  {path: 'criancas', component: ListaCriancasComponent},
  {path: 'vacinas', component: ListaVacinasComponent},
  {path: 'crianca/:id/vacinas', component: CriancaVacinasComponent},
  {path: 'crianca/:id/vacina', component: AdicionaVacinaComponent},
  {path: 'crianca/:id', component: CriancaDetalheComponent},
  {path: 'crianca', component: AdicionaCriancaComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
