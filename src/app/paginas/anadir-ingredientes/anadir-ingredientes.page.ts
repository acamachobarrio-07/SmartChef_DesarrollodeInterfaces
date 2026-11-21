import { Component } from '@angular/core';
import { IonContent, IonModal, IonButton } from '@ionic/angular';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaCategoriaComponent } from '../../componentes/tarjeta-categoria/tarjeta-categoria.component';
import { TarjetaIngredienteComponent } from '../../componentes/tarjeta-ingrediente/tarjeta-ingrediente.component';
import { FormularioIngredienteComponent } from '../../componentes/formulario-ingrediente/formulario-ingrediente.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { Ingrediente } from '../../modelos/ingrediente';
import { INGREDIENTES } from '../../datos/ingredientes';

@Component({
  selector: 'app-anadir-ingredientes',
  templateUrl: './anadir-ingredientes.page.html',
  styleUrls: ['./anadir-ingredientes.page.scss'],
  imports: [
    IonContent,
    IonModal,
    IonButton,
    CabeceraComponent,
    TarjetaCategoriaComponent,
    TarjetaIngredienteComponent,
    FormularioIngredienteComponent,
    ConfirmacionRecetaComponent
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

  modalAbierto = false;
  ingredienteSeleccionado: Ingrediente | null = null;
  anadido = false;

  get ingredientesCategoria(): Ingrediente[] {
    return this.ingredientes.filter(
      ingrediente =>
        ingrediente.categoria === this.categoriaSeleccionada
    );
  }

  cambiarCategoria(nombre: string): void {
    this.categoriaSeleccionada = nombre;
  }

  abrirAnadir(ingrediente: Ingrediente): void {
    this.ingredienteSeleccionado = ingrediente;
    this.anadido = false;
    this.modalAbierto = true;
  }

}
