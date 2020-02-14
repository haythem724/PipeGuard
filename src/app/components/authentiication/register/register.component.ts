import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {User} from './../../../model/user';
import {AuthService} from './../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      firstName:new FormControl ('', Validators.required),
      lastName: new FormControl ('', Validators.required),
      username: new FormControl ('', Validators.required),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)])
    });
   

    console.log(this.allusers());
  }
  onRegister(){
    const user=new User(this.registerForm.value.firstName,
                        this.registerForm.value.lastName,
                        this.registerForm.value.username,
                        this.registerForm.value.password,
      )
  this.authservice.register(user);
  console.log(this.allusers());
  this.router.navigateByUrl('/login');

  }
  allusers(){
    return this.authservice.alluser();
  }

}
