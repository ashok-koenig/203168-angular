import { Routes } from '@angular/router';
import { ButtonDemoComponent } from './pages/button-demo/button-demo.component';
import { FormInputComponent } from './pages/form-input/form-input.component';
import { SnackbarDemoComponent } from './pages/snackbar-demo/snackbar-demo.component';
import { DialogDemoComponent } from './pages/dialog-demo/dialog-demo.component';

export const routes: Routes = [
    {path: '', redirectTo: '/button', pathMatch: 'full'},
    {path:'button', component: ButtonDemoComponent},
    {path: 'form', component: FormInputComponent},
    {path: 'snackbar', component: SnackbarDemoComponent},
    {path: 'dialog', component: DialogDemoComponent}
];
