import { About } from './../about.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bgd-item',
  templateUrl: './bgd-item.component.html',
  styleUrls: ['./bgd-item.component.css']
})
export class BgdItemComponent implements OnInit {
  abouts: About[] = [
    // tslint:disable-next-line:max-line-length
    new About ('http://www.diztinct.co.uk/images/diztinct-communication-value.gif', 'Why Trust Me ?', 'In addition to my diverse experience I believe my ability to solve problems, bold design philosophy and tenacious personality are key assets in continuing to drive any project and team forward to the highest design standard.')
  ];
  constructor() { }

  ngOnInit() {
  }

}
