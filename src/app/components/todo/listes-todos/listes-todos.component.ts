import { Component, OnInit } from '@angular/core';
import {ServiceService} from './../../../service/service.service';
import {Todo} from './../../../model/todo';
import { Router } from "@angular/router";
@Component({
  selector: 'app-listes-todos',
  templateUrl: './listes-todos.component.html',
  styleUrls: ['./listes-todos.component.css']
})
export class ListesTodosComponent implements OnInit {
  todos:Todo[]=[];
  items:Todo[]=[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    console.log("les todos:");
    this.getTodos();
  }
getTodos(){
  this.todos= this.service.getTodos();
  console.log(this.todos);
  
}

onEdit(todo:Todo,id:number): void {
  window.localStorage.removeItem("editTodoId");
  window.localStorage.setItem("editTodoId", JSON.stringify([todo,id]));
  this.router.navigate(['home/edittodo']);
};
onDelete(todo:Todo){
this.service.deletetodo(todo);
}
/*information(id:number){
 this.service.getTodoById(id);
 console.log('objet est: '+ this.service.getTodoById(id));

getTodoById(id:number){
  this.todos.forEach(function(item, index,array) {
    if(id==index){
     console.log('item n: '+ item);
  }
  });
 
}
}*/
}
