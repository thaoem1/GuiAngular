import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public postsAPI : string = 'http://jsonplaceholder.typicode.com/posts';
  // public posts : Post[] = [];
  constructor(
    public http : HttpClient
  ) { }
  getAllPosts() : Observable<any>{
    return this.http.get(this.postsAPI);
  }
  getPostsById(id: number){
    let result = null;
    for(var i = 0; i < this.postsAPI.length; i++){
      if(this.postsAPI[i].length == id){
        result = this.postsAPI[i];
        break;
      }
    }
    return result;
  }
}
