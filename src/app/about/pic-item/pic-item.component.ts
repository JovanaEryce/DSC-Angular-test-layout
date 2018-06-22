import { Component, OnInit } from '@angular/core';
import { About } from '../about.model';

@Component({
  selector: 'app-pic-item',
  templateUrl: './pic-item.component.html',
  styleUrls: ['./pic-item.component.css']
})
export class PicItemComponent implements OnInit {
  abouts: About[] = [
    // tslint:disable-next-line:max-line-length
    new About ('http://www.diztinct.co.uk/images/diztinct-design-studio-kent.jpg', '', 'I work with clients in Kent and London and the United States remotley from my studio.')
  ];
  constructor() { }

  ngOnInit() {
  }

}
