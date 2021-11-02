import { Component, ViewEncapsulation } from "@angular/core";

/* Component is a decorator that marks the class as an ng component
(provides metadata that decides how the component is used at runtime) */
@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styles: [`h1 {color: #fabada}`],

  /* The previous styles apply only to this component (not to child nor parent)
  By default ViewEncapsulation is setted to "Emulated", and emulates the behavior
  of the shadow DOM, by preprocessing and renaming CSS code to effectively scope
  the CSS to the component's view.
  To remove these additional CSS selector we need to set encapsulation to 'none' and
  and styles will be applied globally */
  encapsulation: ViewEncapsulation.None,
})

export class HelloWorldComponent {
  /* All the public properties that are defined in the class are accesible
  in the HTML template */
  title = 'Holi, Mundo';
}