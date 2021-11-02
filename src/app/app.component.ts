import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Hello from ngOnDestroy');

    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }
}
