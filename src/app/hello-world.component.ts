import { Component } from "@angular/core";

/* Component is a decorator that marks the class as an ng component
(provides metadata that decides how the component is used at runtime) */
@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styles: [`h1 {}`]
})

export class HelloWorldComponent {
  /* All the public properties that are defined in the class are accesible
  in the HTML template */
  title = 'Holi, Mundo';
}