import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { ViewComponent } from './view-component/view-component';
import { EditComponent } from './edit-component/edit-component';
import { CreateComponent } from './create-component/create-component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'view/:id',
        component:ViewComponent
    },
    {
        path:'edit/:id',
        component:EditComponent
    },
    {
        path:'create',
        component:CreateComponent
    },
    {
        path:'**',
        component:DashboardComponent
    }

];
