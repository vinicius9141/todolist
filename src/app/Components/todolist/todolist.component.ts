import { Component, OnInit } from '@angular/core';
import { ListService } from '../../Service/list.service'
import { Task } from 'src/app/Models/list';
import {Injectable} from '@angular/core';

export interface ListElement {
  nameTask: string;
  desc: string;
  author: string;
  symbol: string;
}


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements OnInit {
  displayedColumns: string[] = ['nameTask', 'desc', 'author', 'actions'];

  
  constructor(private ListService: ListService) { }
  
  public tasks!: Task[];
  
  ngOnInit(){  
    this.ListService.getTasks()
      .subscribe(
        tasks =>{
          this.tasks = tasks;
          console.log(tasks);
        },
        error =>{
          console.log(error)
        }
      );
  }
  
  deleteTask(){
    var response = window.confirm('Tem certeza?')

    if(response === true){
      this.ListService.deleteTask()
      .subscribe(result =>{
        console.log(result)
      })
    }else{
      alert('else')
    }
    
  }
  

}

