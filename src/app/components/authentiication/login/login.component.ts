import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {AuthService} from './../../../service/auth.service';
import {Router} from '@angular/router';
import {User} from './../../../model/user';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  etat:boolean=false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.logout();
    this.loginForm=new FormGroup({
      username: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required)
    });
  }
  login(){
    let username=this.loginForm.value.username;
    let password=this.loginForm.value.password;
    this.etat=this.authService.login(this.loginForm.value.username,this.loginForm.value.password);
  console.log(this.etat);
  if(this.etat){
   let user = JSON.parse(window.localStorage.getItem("currentUser"));
   console.log(user);
  this.router.navigateByUrl('/home');
  }
  }

}
