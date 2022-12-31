import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core' 
import { contador } from './contador/contador.component';

@NgModule({
    declarations: [
        contador
    ],
    imports:[ 
        CommonModule
    ],
    exports:[
        contador
    ]
})

export class ContadorModule{

}