import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrls: ['./tarjeta-categoria.component.scss']
})
export class TarjetaCategoriaComponent {

  nombre = input.required<string>();

  imagen = input<string>('');

  seleccionada = input<boolean>(false);

  seleccionar = output<string>();

  pulsarCategoria(): void {
    this.seleccionar.emit(this.nombre());
  }

}
