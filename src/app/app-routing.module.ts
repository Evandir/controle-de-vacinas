import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriancaDetalheComponent } from './crianca-detalhe/crianca-detalhe.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaCriancasComponent } from './lista-criancas/lista-criancas.component';
import { ListaVacinasComponent } from './lista-vacinas/lista-vacinas.component';

const routes: Routes = [
  {path: 'criancas', component: ListaCriancasComponent},
  {path: 'vacinas', component: ListaVacinasComponent},
  {path: 'crianca/:id', component: CriancaDetalheComponent},
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
