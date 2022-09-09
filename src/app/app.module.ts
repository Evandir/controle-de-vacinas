import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { BackgroundComponent } from './background/background.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuCriancasComponent } from './menu-criancas/menu-criancas.component';
import { IconeCriancaComponent } from './icone-crianca/icone-crianca.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { ListaCriancasComponent } from './lista-criancas/lista-criancas.component';
import { ListaVacinasComponent } from './lista-vacinas/lista-vacinas.component';
import { CriancaDetalheComponent } from './crianca-detalhe/crianca-detalhe.component';
import { CriancaVacinasComponent } from './crianca-vacinas/crianca-vacinas.component';
import { AdicionaCriancaComponent } from './adiciona-crianca/adiciona-crianca.component';
import { AdicionaVacinaComponent } from './adiciona-vacina/adiciona-vacina.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    BackgroundComponent,
    MenuComponent,
    FooterComponent,
    MenuCriancasComponent,
    IconeCriancaComponent,
    HomePageComponent,
    ListaCriancasComponent,
    ListaVacinasComponent,
    CriancaDetalheComponent,
    CriancaVacinasComponent,
    AdicionaCriancaComponent,
    AdicionaVacinaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
