import { Routes } from '@angular/router';
import { BlogsListComponent } from './pages/blogs-list/blogs-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/blogs', pathMatch:'full'},
    {path: 'blogs', component: BlogsListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: PageNotFoundComponent}
];
