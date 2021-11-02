import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;
  showText: Boolean = false;
  todaysDate = new Date();

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      // console.log('Hello from ngOnInit');
    }, 1000);
  }

  ngOnDestroy() {
    console.log('Hello from ngOnDestroy');

    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  /*Passing arguments in the methods can be very useful when submitting forms
  or looping through arrays, and you need to access a specific element  */
  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }

  /* The context of a template statement can be the component class instance,
  or the template. Becaouse of this, template statements can't refer
  to anything in the global namespace, such 'window' or 'document'*/
}
