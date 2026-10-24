
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./paginas/principal/principal.page').then(m => m.PrincipalPage),
      },
      {
        path: 'recetas',
        loadComponent: () => import('./paginas/recetas/recetas.page').then(m => m.RecetasPage),
      },
      {
        path: 'ingredientes',
        loadComponent: () => import('./paginas/ingredientes/ingredientes.page').then(m => m.IngredientesPage),
      },
      {
        path: 'lista-compra',
        loadComponent: () => import('./paginas/lista-compra/lista-compra.page').then(m => m.ListaCompraPage),
      },
      {
        path: 'plan-semanal',
        loadComponent: () => import('./paginas/plan-semanal/plan-semanal.page').then(m => m.PlanSemanalPage),
      },
      {
        path: 'colecciones',
        loadComponent: () => import('./paginas/colecciones/colecciones.page').then(m => m.ColeccionesPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then(m => m.PerfilPage),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
];
