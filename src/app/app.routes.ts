
import { Routes } from '@angular/router';

export const routes: Routes = [

  // BIENVENIDA
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },

  // LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/login/login.page').then(m => m.LoginPage)
  },

  // APLICACIÓN PRINCIPAL
  {
    path: 'app',
    loadComponent: () =>
      import('./paginas/tabs/tabs.page').then(m => m.TabsPage),

    children: [

      // PÁGINAS PÚBLICAS
      {
        path: 'inicio',
        loadComponent: () =>
          import('./paginas/principal/principal.page')
            .then(m => m.PrincipalPage)
      },

      {
        path: 'recetas',
        loadComponent: () =>
          import('./paginas/recetas/recetas.page')
            .then(m => m.RecetasPage)
      },

      {
        path: 'detalle-receta',
        loadComponent: () =>
          import('./paginas/detalle-receta/detalle-receta.page')
            .then(m => m.DetalleRecetaPage)
      },

      // PÁGINAS DE ACCESO RESTRINGIDO
      {
        path: 'ingredientes',
        redirectTo: '/login'
      },

      {
        path: 'lista-compra',
        redirectTo: '/login'
      },

      {
        path: 'plan-semanal',
        redirectTo: '/login'
      },

      {
        path: 'colecciones',
        redirectTo: '/login'
      },

      {
        path: 'perfil',
        redirectTo: '/login'
      },

      // RUTA POR DEFECTO
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }

    ]
  },

  // OTRAS RUTAS DE ACCESO
  {
    path: 'principal',
    loadComponent: () =>
      import('./paginas/principal/principal.page')
        .then(m => m.PrincipalPage)
  },

  {
    path: 'registro',
    loadComponent: () =>
      import('./paginas/registro/registro.page')
        .then(m => m.RegistroPage)
  },

  {
    path: 'contrasena-olvidada',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada/contrasena-olvidada.page')
        .then(m => m.ContrasenaOlvidadaPage)
  },

  {
    path: 'contrasena-olvidada-confirmacion',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-confirmacion/contrasena-olvidada-confirmacion.page')
        .then(m => m.ContrasenaOlvidadaConfirmacionPage)
  },

  {
    path: 'registro-confirmacion',
    loadComponent: () =>
      import('./paginas/registro-confirmacion/registro-confirmacion.page')
        .then(m => m.RegistroConfirmacionPage)
  },
  {
    path: 'login-chef',
    loadComponent: () => import('./paginas/login-chef/login-chef.page').then( m => m.LoginChefPage)
  },
  {
    path: 'contrasena-olvidada-chef',
    loadComponent: () => import('./paginas/contrasena-olvidada-chef/contrasena-olvidada-chef.page').then( m => m.ContrasenaOlvidadaChefPage)
  },  {
    path: 'contrasena-olvidada-confirmacion-chef',
    loadComponent: () => import('./paginas/contrasena-olvidada-confirmacion-chef/contrasena-olvidada-confirmacion-chef.page').then( m => m.ContrasenaOlvidadaConfirmacionChefPage)
  }


];
