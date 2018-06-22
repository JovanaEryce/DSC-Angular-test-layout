import { Component, OnInit } from '@angular/core';
import { About } from '../about.model';

@Component({
  selector: 'app-small-item',
  templateUrl: './small-item.component.html',
  styleUrls: ['./small-item.component.css']
})
export class SmallItemComponent implements OnInit {
  abouts: About[] = [
    new About ('http://www.diztinct.co.uk/images/portfolio-uploads/ui-design-food-specificaation-tmb.jpg', 'Food Specification', ''),
    new About ('http://www.diztinct.co.uk/images/img16.jpg', 'Pianola', '')
  ];
  constructor() { }

  ngOnInit() {
  }

}
