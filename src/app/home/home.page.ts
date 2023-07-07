import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public progress = 0;
  constructor() {
  setInterval(() => {
    this.progress += 0.001;

    // Reset the progress bar when it reaches 100%
    // to continuously show the demo
    if (this.progress > 1) {
      setTimeout(() => {
        this.progress = 0;
      }, 1000);
    }
  }, 50);
}
}


