import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingsPipe'
})
export class GreetingsPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
