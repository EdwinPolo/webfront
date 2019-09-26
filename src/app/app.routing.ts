import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';

export const routes: Routes = [{
    path: 'login',
    component: LoginComponent
},
{
    path: 'pages',
    component: ThemeComponent,
    children: [
        {
            path: '',
            loadChildren:'./pages/dashboard/dashboard.module#DashboardModule'
        },
        {
            path: '',
            loadChildren:'./pages/administration/administration.module#AdministrationModule'
        },
        {
            path: '',
            loadChildren:'./pages/setting/setting.module#SettingModule'
        },
        {
            path: '',
            loadChildren:'./pages/biblioteca/biblioteca.module#BibliotecaModule'
        }
    ]

}]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule {}