import { Routes } from '@angular/router';
import { ButtonDemoComponent } from './pages/button-demo/button-demo.component';
import { FormInputComponent } from './pages/form-input/form-input.component';

export const routes: Routes = [
    {path: '', redirectTo: '/button', pathMatch: 'full'},
    {path:'button', component: ButtonDemoComponent},
    {path: 'form', component: FormInputComponent}
];
