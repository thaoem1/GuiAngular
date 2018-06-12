import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  public post: Post[] = [];
  public subscription: Subscription;
  constructor(
    public postService: PostsService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subscription = this.postService.getAllPosts().subscribe(data => {
      // console.log(data);
      this.post = data;
    }, error => {
      console.log(error);
    });
  }
  ngOnDestroy() {

  }
  // navigate(url : string){
  //   this.routerService.navigateByUrl(url);
  // }

}
