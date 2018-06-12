import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Albums } from '../model/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  public albumAPI : string = 'http://jsonplaceholder.typicode.com/albums';
  constructor(
    public http : HttpClient
  ) { }

  getAllAlbums() : Observable<any>{
    return this.http.get(this.albumAPI);
  }
}
