import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  lista:string[] = ['spiderman', 'hulk', 'ironman','cap america'];
  resultado:string = ""
  borrarElemento( i:number )  {
    const borrado = this.lista.splice( i,1 )
    this.resultado = borrado[0];
  }

}
