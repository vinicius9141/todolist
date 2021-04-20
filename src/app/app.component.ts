import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Desenvolver Back-end', name: 'Fazer o banco de dados do To-do list', weight: 'Vinicius', symbol: 'H'},
  {position: 'Desenvolver Front-end', name: 'Fazer o design da página do To-do list', weight: 'Gabriel', symbol: 'He'},
 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
