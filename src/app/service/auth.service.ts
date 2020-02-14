import { Injectable } from '@angular/core';
import {User} from './../model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 users:User[]=[];
  constructor() { }

   alluser(){
     return this.users;
   }
  register(user: User) {
    this.users.push(user);
    let lesusers = [];
    if(localStorage.getItem('users') === null) {
      lesusers = [];
      lesusers.push(user);
      localStorage.setItem('users', JSON.stringify(lesusers));
    } else {
      lesusers = JSON.parse(localStorage.getItem('users'));
      lesusers.push(user); 
      localStorage.setItem('users', JSON.stringify(lesusers));
    }
  }
  login(username:string,password:string){
    let etat:boolean=false;
      for (let i=0;i<this.users.length;i++){
        if(this.users[i].username==username && this.users[i].password==password){
          etat=true;
          window.localStorage.setItem("currentUser", JSON.stringify(this.users[i]));
          return etat;
        }
        
      }
      return etat;
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
