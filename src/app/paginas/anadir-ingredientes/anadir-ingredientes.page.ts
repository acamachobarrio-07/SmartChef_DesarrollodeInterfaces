import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaCategoriaComponent } from '../../componentes/tarjeta-categoria/tarjeta-categoria.component';
import { TarjetaIngredienteComponent } from '../../componentes/tarjeta-ingrediente/tarjeta-ingrediente.component';

import { Ingrediente } from '../../modelos/ingrediente';
import { INGREDIENTES } from '../../datos/ingredientes';

@Component({
  selector: 'app-anadir-ingredientes',
  templateUrl: './anadir-ingredientes.page.html',
  styleUrls: ['./anadir-ingredientes.page.scss'],
  imports: [
    IonContent,
    CabeceraComponent,
    TarjetaCategoriaComponent,
    TarjetaIngredienteComponent
  ]
})
export class AnadirIngredientesPage {

  ingredientes = INGREDIENTES;

  categoriaSeleccionada = 'Verduras';

  categorias = [
    {
      nombre: 'Verduras',
      imagen: 'assets/fotos/ingredientes/tomates.png'
    },
    {
      nombre: 'Frutas',
      imagen: 'assets/fotos/ingredientes/aguacate.png'
    },
    {
      nombre: 'Carne',
      imagen: ''
    },
    {
      nombre: 'Pescado',
      imagen: ''
    },
    {
      nombre: 'Legumbres',
      imagen: 'assets/fotos/ingredientes/garbanzos.png'
    },
    {
      nombre: 'Otros',
      imagen: 'assets/fotos/ingredientes/huevos.png'
    }
  ];

  ingredienteSeleccionado: Ingrediente | null = null;

  get ingredientesCategoria(): Ingrediente[] {
    return this.ingredientes.filter(
      ingrediente =>
        ingrediente.categoria === this.categoriaSeleccionada
    );
  }

  cambiarCategoria(nombre: string): void {
    this.categoriaSeleccionada = nombre;
    this.ingredienteSeleccionado = null;
  }

  seleccionarIngrediente(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
  }

}
