import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';


/* Often you want to pass information from one component to another.
To do so you use the Activated Route Interface  */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;
  showText: Boolean = false;
  todaysDate = new Date();
  itemImageUrl = '../assets/aurora-borealis.jpeg';
  fontSizepx: number = 16;
  firstExample = '🙀😅🤷🏻‍♀️';

  constructor(
    private logService: LogService,
    private renderer: Renderer2,
    private host: ElementRef,
  ) { }

  ngOnInit() {
    this.intervalSub = setInterval(() => {
      // console.log('Hello from ngOnInit');
    }, 1000);

    this.logService.logMessage('Holi from service');
    this.renderer.setStyle(this.host.nativeElement, 'color', 'teal');
  }

  ngOnDestroy() {
    console.log('Hello from ngOnDestroy');

    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  /* Passing arguments in the methods can be very useful when submitting forms
  or looping through arrays, and you need to access a specific element  */
  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }

  /* The context of a template statement can be the component class instance,
  or the template. Becaouse of this, template statements can't refer
  to anything in the global namespace, such 'window' or 'document'*/


  // bind to a custom event
  deleteItem(item: any) {
    console.log(item);

  }

  // two way binding: components can share data; syntax("banana-in-a-box"): [()]
  // property binding: []
  // event binding: ()

  callPhone(phone: string) {
    console.log(phone);

  }
}
