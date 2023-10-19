import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private cepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid) {
      this.router.navigate(['/sucesso']);
    } else {
      alert('Formulário inválido.')
    }
      console.log(form);
  }

  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if (cep !== '') {
      this.cepService.getCep(cep).subscribe(
        (res => {
          this.pupolandoEndereco(res, form);
        })
      );
    }
  }

  pupolandoEndereco(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    });
  }
}
