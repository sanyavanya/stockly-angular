import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div class="image" [style]="'background-image: url(' + url + ');'"></div>
  `,
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  @Input() url: string;
  constructor() {}

  ngOnInit(): void {}
}
