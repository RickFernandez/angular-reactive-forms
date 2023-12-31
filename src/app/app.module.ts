import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/maiorIdade.directive';
import { ValidadorCEPDirective } from './directives/validadorCEP.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    MensagemComponent,
    MaiorIdadeDirective,
    ValidadorCEPDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
