import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { ManageRoom } from './admin/manage-room/manage-room';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayout,
        children: [
            { path: 'manage-room', component: ManageRoom },
            { path: '', redirectTo: 'manage-room', pathMatch: 'full' }
        ]
    },
];
