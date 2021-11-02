import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter;

  message: string = 'Message from child through ViewChild';

  constructor() {
    this.childMessage = '(Texto que viene del constructor del Child)';
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Vengo del method \'sendMessage\' en el Child');
  }

}


