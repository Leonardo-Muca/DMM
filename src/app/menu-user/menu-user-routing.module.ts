import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuUserPage } from './menu-user.page';

const routes: Routes = [
  {
    path: '',
    component: MenuUserPage
  },
  {
    path: 'tab3',
    loadChildren: () => import('../menu-chofer/tab3/tab3.page').then( m => m.Tab3Page)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuUserPageRoutingModule {}
