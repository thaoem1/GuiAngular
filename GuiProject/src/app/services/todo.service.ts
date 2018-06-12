import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todoAPI : string = 'http://jsonplaceholder.typicode.com/todos';
  constructor(public http : HttpClient) { }
  getAllTodo():Observable<any>{
    return this.http.get(this.todoAPI);
  }
}
