import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addCircle, nutritionOutline, trashOutline } from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { FormularioDespensaComponent } from '../../componentes/formulario-despensa/formulario-despensa.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { Ingrediente } from '../../modelos/ingrediente';
import { ProductoDespensa } from '../../modelos/despensa';
import { INGREDIENTES } from '../../datos/ingredientes';
import { DESPENSA } from '../../datos/despensa';

@Component({
  selector: 'app-ingredientes-login',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonModal,
    CabeceraComponent,
    FormularioDespensaComponent,
    ConfirmacionRecetaComponent
  ]
})
export class IngredientesPage {

  despensa = DESPENSA;

  unidades = {
    GRAMOS: 'gramos',
    MILILITROS: 'mililitros',
    UNIDADES: 'unidades'
  };

  modalFormularioAbierto = false;
  modalEliminarAbierto = false;
  modalConfirmacionAbierto = false;

  productoSeleccionado: ProductoDespensa | null = null;

  mensajeConfirmacion = '';
  confirmacionPendiente = false;

  constructor(private router: Router) {
    addIcons({
      addCircle,
      nutritionOutline,
      trashOutline
    });
  }

  get ingredientesDisponibles(): Ingrediente[] {
    return INGREDIENTES.filter(
      i => !this.despensa.some(p => p.ingrediente.id === i.id)
    );
  }

  formatearFecha(fecha: string): string {
    const [anio, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${anio}`;
  }

  diasParaCaducar(producto: ProductoDespensa): number {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const caducidad = new Date(producto.caducidad + 'T00:00:00');

    return Math.round(
      (caducidad.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  textoCaducidad(producto: ProductoDespensa): string {
    const dias = this.diasParaCaducar(producto);

    if (dias < 0) {
      return 'Caducado';
    } else if (dias === 0) {
      return 'Caduca hoy';
    } else if (dias === 1) {
      return 'Caduca mañana';
    }

    return `Caduca en ${dias} días`;
  }

  abrirAnadir(): void {
    this.router.navigate(['/app/anadir-ingredientes']);
  }

  abrirModificar(producto: ProductoDespensa): void {
    this.productoSeleccionado = producto;
    this.modalFormularioAbierto = true;
  }

  guardarProducto(datos: ProductoDespensa): void {

    if (this.productoSeleccionado) {
      this.productoSeleccionado.cantidad = datos.cantidad;
      this.productoSeleccionado.caducidad = datos.caducidad;

      this.mensajeConfirmacion = 'Ingrediente modificado correctamente.';
    } else {
      this.despensa.push(datos);
      this.mensajeConfirmacion = 'Ingrediente añadido a tu despensa.';
    }

    this.confirmacionPendiente = true;
    this.modalFormularioAbierto = false;
  }

  abrirEliminar(producto: ProductoDespensa): void {
    this.productoSeleccionado = producto;
    this.modalEliminarAbierto = true;
  }

  confirmarEliminar(): void {

    this.mensajeConfirmacion =
      'Ingrediente eliminado de tu despensa.';

    this.confirmacionPendiente = true;
    this.modalEliminarAbierto = false;
  }

  alCerrarModal(): void {

    this.modalFormularioAbierto = false;
    this.modalEliminarAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }

}
