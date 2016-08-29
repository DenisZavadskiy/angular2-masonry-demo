import { Component, ViewChild } from '@angular/core';
import { AngularMasonry } from 'angular2-masonry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  @ViewChild(AngularMasonry) masonry: AngularMasonry;

  bricks = [
    { id: 0, size: 'sm' },
    { id: 1, size: 'sm' },
    { id: 2, size: 'lg' },
    { id: 3, size: 'sm' },
    { id: 4, size: 'md' },
    { id: 5, size: 'lg' },
    { id: 6, size: 'sm' },
    { id: 7, size: 'sm' },
    { id: 8, size: 'sm' },
    { id: 9, size: 'md' },
    { id: 10, size: 'lg' },
    { id: 11, size: 'sm' },
    { id: 12, size: 'sm' },
    { id: 13, size: 'sm' },
    { id: 14, size: 'lg' },
    { id: 15, size: 'lg' }
  ];

  resize(brick) {
    switch (brick.size) {
      case 'lg':
        brick.size = 'sm';
        break;
      case 'md':
        brick.size = 'lg';
        break;
      case 'sm':
        brick.size = 'md';
        break;
    }

    this.masonry.layout();
  }
}