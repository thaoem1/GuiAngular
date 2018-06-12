import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { TodosComponent } from './todos.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../../services/todo.service';

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [TodosComponent]
})
export class AppModule { }
