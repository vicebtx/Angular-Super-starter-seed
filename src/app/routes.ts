import { Routes } from "@angular/router";

export let appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'list',
        loadChildren: './pages/list/list.module#ListPageModule'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
]