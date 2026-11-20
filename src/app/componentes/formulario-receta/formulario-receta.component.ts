import { Component, input } from '@angular/core';

import { Receta } from '../../modelos/receta';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.scss']
})
export class FormularioRecetaComponent {

  // sino pasamos ninguna receta, el formulario es para añadir, sino modificamos
  receta = input<Receta | null>(null);

}
