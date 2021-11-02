import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sizer',
  templateUrl: './app-sizer.component.html',
  styleUrls: ['./app-sizer.component.scss']
})
export class AppSizerComponent implements OnInit {

  @Input() size: number = 1;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.resize(+1);
    console.log(this.size);
  }

  decrease() {
    this.resize(-1);
    console.log(this.size);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, + this.size + delta));
    this.sizeChange.emit(this.size);
  }

}
