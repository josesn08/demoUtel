import { mascotasPrueba } from '../../util/datos-prueba';
import { Mascota } from './../../../../../../joseDemoUtel/dogtorpet/src/app/models/mascota';
import { Component } from '@angular/core';
import { MascotaComponent } from "../mascota/mascota.component";

@Component({
    selector: 'app-catalogo',
    standalone: true,
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css',
    imports: [MascotaComponent]
})
export class CatalogoComponent {

  mascotas!:Mascota[];

  constructor() {}

  public ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.mascotas = mascotasPrueba;
  }

}
