import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { HeaderComponent } from './components/header/header.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PhotosComponent } from './components/photos/photos.component';

const appRoutes : Routes = [
  {
    path : '',
    redirectTo : '/index',
    pathMatch : 'full'
  },
  {
    path :'posts',
    component : PostsComponent
  },
  // {
  //   path :'posts/:id',
  //   component : CommentsComponent
  // },
  {
    path :'albums',
    component : AlbumsComponent
  },
  {
    path :'todos',
    component : TodosComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    HeaderComponent,
    CommentsComponent,
    PhotosComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
