import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { list } from '../app/Models/list.class';
import { ListService } from '../app/Service/list.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
