import { Pipe, PipeTransform } from '@angular/core';

// Pipe decorator, that is used to call the pipe in our templates
@Pipe({
  name: 'greetingsPipe'
})
  
  // The PipeTransform interface need to be implemented.
  // This interface requires the transform method to be implemented
export class GreetingsPipePipe implements PipeTransform {

  // This method receives a value passed from a template. In this case it will be a string, 
  // and the second parameter is for optional params
  transform(value: unknown, ...args: unknown[]): string {
    return `Hello, ${value}`;
  }

}
