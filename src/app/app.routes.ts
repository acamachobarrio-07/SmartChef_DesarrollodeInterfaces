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

  // LOGIN DEL USUARIO
  {
    path: 'login',
    loadComponent: () =>
      import('./paginas/login/login.page')
        .then(m => m.LoginPage)
  },

  // APLICACIÓN PRINCIPAL CON PESTAÑAS
  {
    path: 'app',
    loadComponent: () =>
      import('./paginas/tabs/tabs.page')
        .then(m => m.TabsPage),

    children: [

      // INICIO PÚBLICO
      {
        path: 'inicio',
        loadComponent: () =>
          import('./paginas/principal/principal.page')
            .then(m => m.PrincipalPage)
      },

      // INICIO CON SESIÓN INICIADA
      {
        path: 'inicio-login',
        loadComponent: () =>
          import('./paginas/inicio-login/inicio-login.page')
            .then(m => m.InicioLoginPage)
      },

      // RECETAS
      {
        path: 'recetas',
        loadComponent: () =>
          import('./paginas/recetas/recetas.page')
            .then(m => m.RecetasPage)
      },

      // DETALLE DE RECETAS
      {
        path: 'detalle-receta',
        loadComponent: () =>
          import('./paginas/detalle-receta/detalle-receta.page')
            .then(m => m.DetalleRecetaPage)
      },

      // INGREDIENTES
      {
        path: 'ingredientes',
        loadComponent: () =>
          import('./paginas/ingredientes-login/ingredientes.page')
            .then(m => m.IngredientesPage)
      },

      // LISTA DE COMPRA
      {
        path: 'lista-compra',
        loadComponent: () =>
          import('./paginas/lista-compra/lista-compra.page')
            .then(m => m.ListaCompraPage)
      },

      // PLAN SEMANAL
      {
        path: 'plan-semanal',
        loadComponent: () =>
          import('./paginas/plan-semanal/plan-semanal.page')
            .then(m => m.PlanSemanalPage)
      },

      // COLECCIONES
      {
        path: 'colecciones',
        loadComponent: () =>
          import('./paginas/colecciones/colecciones.page')
            .then(m => m.ColeccionesPage)
      },

      // PERFIL
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

  // PÁGINA PRINCIPAL SIN PESTAÑAS
  {
    path: 'principal',
    loadComponent: () =>
      import('./paginas/principal/principal.page')
        .then(m => m.PrincipalPage)
  },

  // REGISTRO
  {
    path: 'registro',
    loadComponent: () =>
      import('./paginas/registro/registro.page')
        .then(m => m.RegistroPage)
  },

  // CONTRASEÑA OLVIDADA
  {
    path: 'contrasena-olvidada',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada/contrasena-olvidada.page')
        .then(m => m.ContrasenaOlvidadaPage)
  },

  // CONFIRMACIÓN DE CONTRASEÑA
  {
    path: 'contrasena-olvidada-confirmacion',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-confirmacion/contrasena-olvidada-confirmacion.page')
        .then(m => m.ContrasenaOlvidadaConfirmacionPage)
  },

  // CONFIRMACIÓN DE REGISTRO
  {
    path: 'registro-confirmacion',
    loadComponent: () =>
      import('./paginas/registro-confirmacion/registro-confirmacion.page')
        .then(m => m.RegistroConfirmacionPage)
  },

  // LOGIN DEL CHEF
  {
    path: 'login-chef',
    loadComponent: () =>
      import('./paginas/login-chef/login-chef.page')
        .then(m => m.LoginChefPage)
  },

  // CONTRASEÑA OLVIDADA DEL CHEF
  {
    path: 'contrasena-olvidada-chef',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-chef/contrasena-olvidada-chef.page')
        .then(m => m.ContrasenaOlvidadaChefPage)
  },

  // CONFIRMACIÓN DE CONTRASEÑA DEL CHEF
  {
    path: 'contrasena-olvidada-confirmacion-chef',
    loadComponent: () =>
      import('./paginas/contrasena-olvidada-confirmacion-chef/contrasena-olvidada-confirmacion-chef.page')
        .then(m => m.ContrasenaOlvidadaConfirmacionChefPage)
  },

  // INICIO DEL CHEF
  {
    path: 'inicio-chef',
    loadComponent: () =>
      import('./paginas/inicio-chef/inicio-chef.page')
        .then(m => m.InicioChefPage)
  },

  // PERFIL DEL CHEF
  {
    path: 'perfil-chef',
    loadComponent: () =>
      import('./paginas/perfil-chef/perfil-chef.page')
        .then(m => m.PerfilChefPage)
  },

  // PERFIL DEL USUARIO
  {
    path: 'perfil-usuario',
    loadComponent: () =>
      import('./paginas/perfil-usuario/perfil-usuario.page')
        .then(m => m.PerfilUsuarioPage)
  }

];
