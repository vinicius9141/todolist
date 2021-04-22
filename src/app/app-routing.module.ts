import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task } from '../app/Models/list';
import { ListService } from '../app/Service/list.service';
import { TodolistComponent } from '../app/Components/todolist/todolist.component';
import { FormInsertTaskComponent } from './Components/form-insert-task/form-insert-task.component'

const routes: Routes = [
  { path: '', redirectTo: '/todolist', pathMatch: 'full'},
  { path: 'todolist', component: TodolistComponent},
  { path: 'inserttask', component: FormInsertTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
