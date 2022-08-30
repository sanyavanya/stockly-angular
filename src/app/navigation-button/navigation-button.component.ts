import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-button',
  template: `<div class="navigation-button"><ng-content></ng-content></div> `,
  styleUrls: ['./navigation-button.component.scss'],
})
export class NavigationButtonComponent implements OnInit {
  @Input() routerLink: string;
  constructor() {}

  ngOnInit(): void {}
}
