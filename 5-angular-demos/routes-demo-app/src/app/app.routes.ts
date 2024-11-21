import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutCompanyComponent } from './pages/about-company/about-company.component';
import { AboutPeopleComponent } from './pages/about-people/about-people.component';

export const routes: Routes = [
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, children:[
        {path: '', redirectTo:'/about/company', pathMatch:'full'},
        {path:'company', component: AboutCompanyComponent},
        {path: 'people', component: AboutPeopleComponent}
    ]},
    // {path: 'about/company', component: AboutCompanyComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PageNotFoundComponent}
];
