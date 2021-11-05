import { Injectable } from '@angular/core';

@Injectable({
  /* The service is going to be provided in the root of the application, so it's going to be
  visible through the entire application */
  providedIn: 'root'
})

export class LogService {
  logMessage(msg: string): void {
    console.log(msg);
  }
}
