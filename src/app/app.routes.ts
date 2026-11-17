import { Routes } from '@angular/router';

export const routes: Routes = [

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
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/login/login.page')
        .then(m => m.LoginPage)
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./paginas/tabs/tabs.page')
        .then(m => m.TabsPage),

    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./paginas/principal/principal.page')
            .then(m => m.PrincipalPage)
      },
      {
        path: 'inicio-login',
        loadComponent: () =>
          import('./paginas/inicio-login/inicio-login.page')
            .then(m => m.InicioLoginPage)
      },
      {
        path: 'recetas',
        loadComponent: () =>
          import('./paginas/recetas/recetas.page')
            .then(m => m.RecetasPage)
      },
      {
        path: 'recetas/:id',
        loadComponent: () =>
          import('./paginas/detalle-receta/detalle-receta.page')
            .then(m => m.DetalleRecetaPage)
      },
      {
        path: 'ingredientes',
        loadComponent: () =>
          import('./paginas/ingredientes-login/ingredientes.page')
            .then(m => m.IngredientesPage)
      },

      // Seleccionar ingrediente para añadir
      {
        path: 'anadir-ingredientes',
        loadComponent: () =>
          import('./paginas/anadir-ingredientes/anadir-ingredientes.page')
            .then(m => m.AnadirIngredientesPage)
      },

      {
        path: 'lista-compra',
        loadComponent: () =>
          import('./paginas/lista-compra/lista-compra.page')
            .then(m => m.ListaCompraPage)
      },
      {
        path: 'plan-semanal',
        loadComponent: () =>
          import('./paginas/plan-semanal/plan-semanal.page')
            .then(m => m.PlanSemanalPage)
      },
      {
        path: 'colecciones',
        loadComponent: () =>
          import('./paginas/colecciones/colecciones.page')
            .then(m => m.ColeccionesPage)
      },
      {
        path: 'colecciones/:id',
        loadComponent: () =>
          import('./paginas/coleccion-detalle/coleccion-detalle.page')
            .then(m => m.ColeccionDetallePage)
      },
      {
        path: 'perfil',
        redirectTo: '/login'
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      }
    ]
  },

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
    loadComponent: () =>
      import('./paginas/login-chef/login-chef.page')
        .then(m => m.LoginChefPage)
  },
  {
    path: 'contrasena-olvidada-chef',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-chef/contrasena-olvidada-chef.page')
        .then(m => m.ContrasenaOlvidadaChefPage)
  },
  {
    path: 'contrasena-olvidada-confirmacion-chef',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-confirmacion-chef/contrasena-olvidada-confirmacion-chef.page')
        .then(m => m.ContrasenaOlvidadaConfirmacionChefPage)
  },
  {
    path: 'inicio-chef',
    loadComponent: () =>
      import('./paginas/inicio-chef/inicio-chef.page')
        .then(m => m.InicioChefPage)
  },
  {
    path: 'perfil-chef',
    loadComponent: () =>
      import('./paginas/perfil-chef/perfil-chef.page')
        .then(m => m.PerfilChefPage)
  },
  {
    path: 'perfil-usuario',
    loadComponent: () =>
      import('./paginas/perfil-usuario/perfil-usuario.page')
        .then(m => m.PerfilUsuarioPage)
  }

];
