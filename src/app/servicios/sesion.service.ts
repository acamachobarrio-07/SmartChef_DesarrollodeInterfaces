import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  // Indica si el usuario ha iniciado sesión
  sesionIniciada = false;

  // Iniciar sesión
  iniciarSesion(): void {
    this.sesionIniciada = true;
  }

  // Cerrar sesión
  cerrarSesion(): void {
    this.sesionIniciada = false;
  }

  // Comprobar si hay una sesión activa
  comprobarSesion(): boolean {
    return this.sesionIniciada;
  }

}
