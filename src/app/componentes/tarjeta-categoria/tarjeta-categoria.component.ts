import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrls: ['./tarjeta-categoria.component.scss']
})
export class TarjetaCategoriaComponent {

  nombre = input.required<string>();
  imagen = input<string>('');
  seleccionada = input<boolean>(false);

}
