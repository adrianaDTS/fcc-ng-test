import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.route.snapshot.paramMap.get('id'));
  }

}
