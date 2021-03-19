import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';



const routes: Routes = [
  { path: '', redirectTo: '/tabs/home', pathMatch: 'full' },

  {
    path: '',
    component: TabsPage,
    outlet: 'primary',
    children: [
      { path: '', loadChildren: () => import('../../components/comunes/comunes.module').then(m => m.ComunesModule) },
      { path: 'categorias', loadChildren: () => import('../../components/categorias/categorias.module').then(m => m.CategoriasModule)   },
      { path: 'vehiculos', loadChildren: () => import('../../components/categorias/categorias.module').then( m => m.CategoriasModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
