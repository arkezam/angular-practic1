import {Component} from '@angular/core'

@Component({
    selector: 'appcontador',
    template:`
    <h1> la base es: {{base}} </h1>
    <h1> {{contador}} </h1>
    <button (click)="acumular(base)"> +{{base}}  </button>
    <button (click)="acumular(-base)"> - {{base}}  </button>
    `
})

export class contador{
    mivariable = "resultado de variable"
    base:number = 5;
    contador:number = 0;
  
    acumular( valor: number){
      this.contador = this.contador+valor;
    }
}
