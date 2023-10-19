import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Directive({
  selector: '[cepValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidadorCEPDirective,
    multi: true
  }]
})
export class ValidadorCEPDirective implements AsyncValidator{

  constructor(private cepService: ConsultaCepService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null>  {
    const cep = control.value;

    return this.cepService.getCep(cep).pipe(
      map((res: any) => {
        return res.erro ? {'cepValidator': true} : null;
      })
    )
  }
}
