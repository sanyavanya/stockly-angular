import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Album } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private albumUrl = 'api/album';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Album> {
    return this.http.get<Album>(this.albumUrl);
  }
}
