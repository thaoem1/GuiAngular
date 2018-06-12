import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Subscription } from 'rxjs';
import { Albums } from '../../model/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  public album : Albums[] = [];
  public subscription : Subscription;
  constructor(
    public albumsService : AlbumsService
  ) { }

  ngOnInit() {
    this.loadData();
  }
  loadData(){
    this.subscription = this.albumsService.getAllAlbums().subscribe(data => {
      // console.log(data);
      this.album = data;
    }, error => {
      console.log(error);
    });
  }
  
  ngOnDestroy(){

  }

}
