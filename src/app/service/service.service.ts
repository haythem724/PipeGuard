import { Injectable } from '@angular/core';
import {Todo} from './../model/todo';
 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  todos: Todo[]=[{
    'title':'aaa',
    'description':'aaa',
    'categorie':'A'
  }
  
  ];
  userid:number;
  constructor() { }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  getTodos(){
    return this.todos;
  }
  updatetodo(index:number,todo:Todo){
    this.todos[index]=todo;
  }
  getTodoById(id:number){
    this.todos.forEach(function(item, index) {
      if(id==index){
      return index;
    }
    });
   
  }
 
  deletetodo(todo:Todo){
    for (let i = 0; i < this.todos.length; i++) {
      if (todo == this.todos[i]) {
        this.todos.splice(i, 1);
        
      }
  }
}
}

