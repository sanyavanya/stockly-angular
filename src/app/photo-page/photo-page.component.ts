import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { Album, Photo } from '../../types';

@Component({
  selector: 'app-photo',
  template: `<div class="photo">
    <div class="photo__display">
      <a class="photo__nav-link" [routerLink]="['/', album.id, photoIndex - 1]">
        <app-navigation-button>◀</app-navigation-button></a
      >
      <div class="photo__image">
        <app-image [url]="album.photos[photoIndex].src"></app-image>
        <div class="photo__information">
          <div>{{ photoIndex + 1 }} of {{ album.photos.length }}</div>
          <div>{{ album.title }}</div>
        </div>
      </div>
      <a class="photo__nav-link" [routerLink]="['/', album.id, photoIndex + 1]">
        <app-navigation-button>▶</app-navigation-button>
      </a>
    </div>

    <div class="photo__info">
      <div>Posted by: {{ album.photos[photoIndex].postedBy }}</div>
      <div>Posted on: {{ postedAt }}</div>
      <div>{{ album.photos[photoIndex].description }}</div>
      <hr />
      <div
        *ngFor="let comment of album.photos[photoIndex].comments"
        class="comment"
      >
        <app-comment
          [postedBy]="comment.postedBy"
          [postedAt]="comment.postedAt"
          [content]="comment.content"
        ></app-comment>
      </div>
    </div>
  </div>`,
  styleUrls: ['./photo-page.scss'],
})
export class PhotoPage implements OnInit {
  photo: Photo;
  photoIndex: number;
  photoPosition: string;
  count: number;
  album: Album;
  postedAt: string;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((album) => {
      this.album = album;
      this.photoIndex = Number(this.route.snapshot.params['photoIndex']);
      this.photo = this.album.photos[this.photoIndex];
      this.postedAt = new Date(this.photo.postedAt).toLocaleString();
    });

    this.route.params.subscribe((params) => {
      this.photoIndex = Number(params['photoIndex']);
      this.photo = this.album.photos[this.photoIndex];
      console.log(this.photoIndex);
      console.log(this.photo);
      this.postedAt = new Date(this.photo.postedAt).toLocaleString();
    });
  }
}
