import { Component } from "@angular/core";

@Component({
    selector:"app-heroes",
    templateUrl:'./heroes.component.html'
})
export class HeroeComponent{

    nombre:string = "Ironman";
    edad: number = 29;

    get obtenerNombre():string{
        return `${this.nombre} - ${this.edad} `
    }

    

    cambiarNombre():void{
        this.nombre = "spiderman"
    }

}