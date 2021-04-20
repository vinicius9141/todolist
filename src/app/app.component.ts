import { Component } from '@angular/core';

export interface ListElement {
  nameTask: string;
  desc: string;
  author: string;
  symbol: string;
}

const TO_DO_LIST: ListElement[] = [
  { nameTask: 'Desenvolver Back-end', desc: 'Fazer o banco de dados do To-do list', author: 'Vinicius', symbol: 'H'},
  { nameTask: 'Desenvolver Front-end', desc: 'Fazer o design da página do To-do list', author: 'Gabriel', symbol: 'He'},
 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  displayedColumns: string[] = ['nameTask', 'desc', 'author', 'actions'];
  dataSource = TO_DO_LIST;
}
