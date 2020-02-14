import { Component, OnInit } from '@angular/core';
import {User} from './../../model/user';
import {AuthService} from './../../service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser:User;
  constructor(private authservice:AuthService, private router:Router) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
   }

  ngOnInit() {
  }
  logout(){
 this.authservice.logout();
 this.router.navigateByUrl('/login');
  }
}
