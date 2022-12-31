import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  Personajes: Personaje []=[
    {
      nombre:"goku",
      poder:1999
    },
    {
      nombre:"vegeta",
      poder:1123
    }
  ]

  nuevo: Personaje = 
    {
      nombre:"Mr. r",
      poder:11
    }

    onagregarNuevo(argumentos:Personaje){
      this.Personajes.push(argumentos)

    }
  


}

