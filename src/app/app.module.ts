import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceService} from './service/service.service';
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './guards/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateTodoComponent } from './components/todo/update-todo/update-todo.component';
import { AddTodoComponent } from './components/todo/add-todo/add-todo.component';
import { ListesTodosComponent } from './components/todo/listes-todos/listes-todos.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components//authentiication/login/login.component';
import { RegisterComponent } from './components//authentiication/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UpdateTodoComponent,
    AddTodoComponent,
    ListesTodosComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ServiceService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
