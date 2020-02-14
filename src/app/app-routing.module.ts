import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListesTodosComponent } from './components/todo/listes-todos/listes-todos.component';
import {AddTodoComponent} from './components/todo/add-todo/add-todo.component';
import {UpdateTodoComponent} from './components/todo/update-todo/update-todo.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {RegisterComponent} from './components/authentiication/register/register.component';
import {LoginComponent} from './components/authentiication/login/login.component';
import {AuthGuardService} from './guards/auth-guard.service';

const routes: Routes = [
  { path: 'home/addtodo', component:AddTodoComponent, canActivate:[AuthGuardService] },
  { path: 'edittodo', component:UpdateTodoComponent, canActivate:[AuthGuardService] },
  { path: 'home/listestodos', component:ListesTodosComponent, canActivate:[AuthGuardService]  },
  { path: 'home', component:NavigationComponent, canActivate:[AuthGuardService]  },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
