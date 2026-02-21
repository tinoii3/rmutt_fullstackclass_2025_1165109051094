import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { ManageRoom } from './admin/manage-room/manage-room';
import { ComponentPage } from './core/component-page/component-page';

export const routes: Routes = [
  {
    path: '',
    component: ComponentPage
  },

  {
    path: 'admin', //ใครที่ทำส่วน admin ให้มาต่อ path ที่ตรงนี้ใน children
    component: AdminLayout,
    children: [
      { path: 'manage-room', component: ManageRoom },
      { path: '', redirectTo: 'manage-room', pathMatch: 'full' }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }
];