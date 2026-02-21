import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { ManageRoom } from './admin/manage-room/manage-room';
import { Component } from '@angular/core';

// สร้าง Component ล่องหนแบบง่ายๆ เพื่อไว้รับจบหน้าแรก (Home)
@Component({ template: '' })
export class EmptyHomeComponent {}

export const routes: Routes = [
    { path: '', component: EmptyHomeComponent, pathMatch: 'full' },
    {
        path: 'admin',
        component: AdminLayout,
        children: [
            { path: 'manage-room', component: ManageRoom },
            { path: '', redirectTo: 'manage-room', pathMatch: 'full' }
        ]
    },
];
