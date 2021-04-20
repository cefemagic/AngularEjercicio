import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Enero','Febrero','Marzo','Abril','Mayo'];
    heroeBorrado: string = ''

    borrarHeroe(){
      console.log('Borrando...');

      const hBorrado = this.heroes.shift();
      this.heroeBorrado = hBorrado || '';
    }

}
