import { Component, OnInit } from '@angular/core';

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
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  displayedColumns: string[] = ['nameTask', 'desc', 'author', 'actions'];
  dataSource = TO_DO_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
