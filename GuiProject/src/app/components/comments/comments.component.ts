import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from './../../model/post';
import { PostsService } from './../../services/posts.service';
// import { Albums } from '../../model/albums';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public post : Post[] = null;
  constructor(
    public activateRoute : ActivatedRoute,
    public postService : PostsService
  ) { }

  ngOnInit() {
    // console.log(this.activateRoute.snapshot.params['id']);
    let id = (+this.activateRoute.snapshot.params['id']);
    // this.post = this.postService.getPostsById(id);
    console.log(this.post);
    
  }

}
