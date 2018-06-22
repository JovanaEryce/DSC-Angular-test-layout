import { Component, OnInit } from '@angular/core';
import { About } from '../about.model';

@Component({
  selector: 'app-medium-item',
  templateUrl: './medium-item.component.html',
  styleUrls: ['./medium-item.component.css']
})
export class MediumItemComponent implements OnInit {
  abouts: About[] = [
    new About ('http://www.diztinct.co.uk/images/nathalie-mckeith-profile-small.jpg', 'Nathalie Mckeith Assistant', ''),
    new About ('http://www.diztinct.co.uk/images/merlin-diztinct-office-dog.jpg', 'Merline Office Dog', '')
  ];
  constructor() { }

  ngOnInit() {
  }

}
