import { Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

export const routes: Routes = [
    {path: '', redirectTo: '/books', pathMatch:"full"},
    {path: 'books', component: ListBookComponent},
    {path: 'books/add', component: AddBookComponent},
    {path: 'books/edit/:id', component: EditBookComponent}
];
