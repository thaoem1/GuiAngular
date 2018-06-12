import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  public todo : Todo[] = [];
  public subscription : Subscription;
  constructor(
    public todoService : TodoService
  ) { }

  ngOnInit() { 
  this.loadData();
  }
loadData(){
  this.subscription = this.todoService.getAllTodo().subscribe(data => {
    // console.log(data);
    this.todo = data;
  }, error => {
    console.log(error);
  });
}
  ngOnDestroy(){

  }

}
