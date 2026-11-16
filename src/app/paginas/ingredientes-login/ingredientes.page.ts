import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonSearchbar, IonModal } from '@ionic/angular';

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
    IonSearchbar,
    IonModal,
    FormsModule,
    CabeceraComponent,
    FormularioDespensaComponent,
    ConfirmacionRecetaComponent
  ]
})
export class IngredientesPage {

  // Trabajamos sobre el mismo array de datos: los cambios se mantienen
  // mientras la aplicación esté abierta (al recargar vuelven los de ejemplo)
  despensa = DESPENSA;

  busqueda = '';

  unidades = {
    GRAMOS: 'gramos',
    MILILITROS: 'mililitros',
    UNIDADES: 'unidades'
  };

  // Modales
  modalFormularioAbierto = false;
  modalEliminarAbierto = false;
  modalConfirmacionAbierto = false;

  // Producto que se modifica o elimina (null = añadir uno nuevo)
  productoSeleccionado: ProductoDespensa | null = null;

  mensajeConfirmacion = '';
  confirmacionPendiente = false;

  constructor() {
    addIcons({
      addCircle,
      nutritionOutline,
      trashOutline
    });
  }

  // Productos que coinciden con la búsqueda, los que caducan antes primero
  get productosFiltrados(): ProductoDespensa[] {
    const texto = this.busqueda.trim().toLowerCase();

    return this.despensa
      .filter(p => p.ingrediente.nombre.toLowerCase().includes(texto))
      .sort((a, b) => a.caducidad.localeCompare(b.caducidad));
  }

  // Ingredientes del catálogo que todavía no están en la despensa
  get ingredientesDisponibles(): Ingrediente[] {
    return INGREDIENTES.filter(
      i => !this.despensa.some(p => p.ingrediente.id === i.id)
    );
  }

  // '2026-12-12' -> '12/12/2026'
  formatearFecha(fecha: string): string {
    const [anio, mes, dia] = fecha.split('-');
    return `${dia}/${mes}/${anio}`;
  }

  // Días que faltan para que caduque (negativo si ya ha caducado)
  diasParaCaducar(producto: ProductoDespensa): number {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    const caducidad = new Date(producto.caducidad + 'T00:00:00');

    return Math.round((caducidad.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
  }

  // Texto del aviso según los días que faltan
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
    this.productoSeleccionado = null;
    this.modalFormularioAbierto = true;
  }

  abrirModificar(producto: ProductoDespensa): void {
    this.productoSeleccionado = producto;
    this.modalFormularioAbierto = true;
  }

  // Recibe los datos del formulario
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

    if (this.productoSeleccionado) {
      const posicion = this.despensa.indexOf(this.productoSeleccionado);

      if (posicion !== -1) {
        this.despensa.splice(posicion, 1);
      }

      this.mensajeConfirmacion = 'Ingrediente eliminado de tu despensa.';
      this.confirmacionPendiente = true;
    }

    this.modalEliminarAbierto = false;
  }

  // La confirmación se abre cuando el modal anterior ha terminado de cerrarse
  alCerrarModal(): void {
    this.modalFormularioAbierto = false;
    this.modalEliminarAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }

}
