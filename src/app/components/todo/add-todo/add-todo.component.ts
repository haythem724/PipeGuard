import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Todo} from './../../../model/todo';
import {ServiceService} from './../../../service/service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  categories=['A','B','C'];
  todo:Todo;
  todoform:FormGroup;
  constructor(private service:ServiceService, private router:Router) { }
 
  ngOnInit() {
    this.todoform=new FormGroup({
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      categorie:new FormControl('',Validators.required)
    });
    console.log(this.getTodo());
  }
  onSubmit(){
    this.todo=new Todo(
      this.todoform.value.title,
      this.todoform.value.description,
      this.todoform.value.categorie
      );
    console.log(this.todo);
    this.service.addTodo(this.todo);
    this.ngOnInit();
    this.getTodo();
    this.router.navigateByUrl('/listestodos');
  }
  getTodo(){
    return this.service.getTodos();
  }

}
