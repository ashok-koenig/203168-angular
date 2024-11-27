import { Routes } from '@angular/router';
import { BlogsListComponent } from './pages/blogs-list/blogs-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

export const routes: Routes = [
    {path:'', redirectTo:'/blogs', pathMatch:'full'},
    {path: 'blogs', component: BlogsListComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'blogs/add', component: BlogFormComponent},
    {path: 'unauthorized', component: UnauthorizedComponent},
    {path: '**', component: PageNotFoundComponent}
];
