import { Component, HostListener } from '@angular/core';

export enum KEY_CODE {
  ESCAPE = 27,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 43.0616993;
  lng: number = -73.8069372;
  markerClicked: boolean = false;

  ngOnInit() {
    // Do any initialization
  }

  showPhotoViewer(): void {
    this.markerClicked = true;
  }

  hidePhotoViewer(): void {
    this.markerClicked = false;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.ESCAPE) {
      this.markerClicked = false;
    } else if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      // TODO move carousel ahead by one
    } else if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      // TODO move carousel back by one
    }
  }
}
