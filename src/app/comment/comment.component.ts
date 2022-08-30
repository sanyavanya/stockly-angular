import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  template: `
    <div>{{ postedBy }}</div>
    <div>{{ postedAt }}</div>
    <div>{{ content }}</div>
  `,
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() postedBy: number;
  @Input() postedAt: number;
  @Input() content: string;

  constructor() {}

  ngOnInit(): void {}
}
