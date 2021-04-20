import { Component } from '@angular/core'


@Component({
    selector: 'app-contador',
    template: `        
        <h1>Hola mundo</h1>
        <h1>La base es: <strong> {{ base }}</strong></h1>

        <hr>

        <button (click)="acumular( +base )"> + 5 </button>

        <span>{{numero}}</span>

        <button (click)="acumular( base * -1 )"> - 5 </button>
    `
})

export class ContadorComponent{

    title: string = 'Contador App';
    numero: number = 55;

    base: number = 5;

    acumular( valor: number){
    this.numero += valor;
    // this.numero += + valor;
  }

}