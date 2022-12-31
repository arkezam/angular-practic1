import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

 
  @Input() nuevo:Personaje ={
    nombre: "",
    poder: 0
  } 

  @Output( ) agregarNuevo:EventEmitter < Personaje>= new EventEmitter()


  agregar( ){

    console.log(this.nuevo)
    
    this.agregarNuevo.emit(this.nuevo)

    this.nuevo = {nombre:"",poder:0}

  
  }
}
