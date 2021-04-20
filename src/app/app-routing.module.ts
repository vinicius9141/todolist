import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { list } from '../app/Models/list.class';
import { ListService } from '../app/Service/list.service';
import { TodolistComponent } from '../app/Components/todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full'},
  { path: 'todolist', component: TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
