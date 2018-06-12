import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AlbumsComponent } from './albums.component';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AlbumsService } from '../../services/albums.service';

@NgModule({
  declarations: [
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AlbumsService],
  bootstrap: [AlbumsComponent]
})
export class AppModule { }
