import { Component, OnInit } from '@angular/core';

import { ListService } from '../../Service/list.service'
import { Task } from '../../Models/list';
import {​​​​​​​​ FormControl, FormGroup, ValidatorFn, Validators,FormBuilder }​​​​​​​​ from'@angular/forms';



@Component({
  selector: 'app-form-insert-task',
  templateUrl: './form-insert-task.component.html',
  styleUrls: ['./form-insert-task.component.css']
})
export class FormInsertTaskComponent implements OnInit {

  formTask: FormGroup = new FormGroup({
    taskName: new FormControl(''),
    taskDesc: new FormControl(''),
    taskAuthor: new FormControl(''),
  });
 
 

  constructor(private listService: ListService ) { }

  public task!: Task;  

  ngOnInit(): void { }


  taskRegister(){
    this.task = Object.assign({},this.task, this.formTask.value);
    console.log(this.task);
    this.listService.insertTask(this.task)
        .subscribe(
          response => {
            this.task = response;
            console.log(response);
            alert('Deu certo')
          },
          error => 
          {
            console.log(error)
            alert('Algo deu errado')
          }
  
          );
        this.formTask.reset();
    }
}
