import { RouterModule, Routes } from "@angular/router";
import { TablaComponent } from './component/tabla/tabla.component';
import { FormComponent } from "./component/form/form.component";


const APP_ROUTES: Routes = [
    { path: 'tabla', component: TablaComponent},
    { path: 'formulario', component: FormComponent},
    {path: '**', pathMatch:'full', redirectTo: ''}    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true});