import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { PostsService } from '../../services/posts.service';
// import { PostComponent } from './posts.component';
import { PostsComponent } from './posts.component';
import { CommentsComponent } from '../comments/comments.component';

const postsRoutes : Routes = [
  {
    path : '',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  {
    path :'posts',
    component : PostsComponent
  },
  {
    path :'posts/:id',
    component : CommentsComponent
  }
];
@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(postsRoutes),
    
  ],
  providers: [PostsService],
  bootstrap: [PostsComponent]
})
export class AppModule { }

