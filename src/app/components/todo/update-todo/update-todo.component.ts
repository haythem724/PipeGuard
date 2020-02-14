import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import {Todo} from './../../../model/todo';
import {ServiceService} from './../../../service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  updatetodoform:FormGroup;
  categories=['A','B','C'];
   updatetodo:Todo;
   index:number;
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit() {
    let todoId = JSON.parse(window.localStorage.getItem("editTodoId"));
    this.updatetodo=todoId[0];
    this.index=todoId[1];
    this.updatetodoform=new FormGroup({
      title:new FormControl(this.updatetodo.title,Validators.required),
      description:new FormControl(this.updatetodo.description,Validators.required),
      categorie:new FormControl(this.updatetodo.categorie,Validators.required)
    });
    
  }
  onUpdate(){
  const newtodo= new Todo(this.updatetodoform.value.title,
                          this.updatetodoform.value.description,
                          this.updatetodoform.value.categorie );

 this.service.updatetodo(this.index,newtodo);
 this.router.navigateByUrl('/listestodos');         
                }
 
  }
 


