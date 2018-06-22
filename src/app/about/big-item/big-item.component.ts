import { Component, OnInit } from '@angular/core';
import { About } from '../about.model';

@Component({
  selector: 'app-big-item',
  templateUrl: './big-item.component.html',
  styleUrls: ['./big-item.component.css']
})
export class BigItemComponent implements OnInit {
  abouts: About[] = [
    // tslint:disable-next-line:max-line-length
    new About('http://www.diztinct.co.uk/images/phil-mckeith-diztinct-profile.jpg', 'Phil Mckeith', 'I am a freelance digital transformation consultant working in London, with 18 years’ professional experience. My professional career has seen me adapt and develop design thinking through significant technology transitions including analogue to digital, mainframes to web and cloud to mobile technology and I continue to do so with emerging technology such as block-chain and decentralised applications.'),
    // tslint:disable-next-line:max-line-length
    new About('http://www.diztinct.co.uk/images/digital-product-designer-london.jpg', 'Why Choose Me?', 'In today’s crowded market place there are often hundreds of digital brands jostling for the attention of a small target audience. By helping my clients find their own distinct personality and to understand their users better, I create the clear difference. I have worked on a wide range of digital enterprise systems including E-commerce, Warehouse Management Systems, Digital Asset Management, Product Information Management, Agile Project Management, Learner Management System and Virtual Learning Environments.')
  ];
  constructor() { }

  ngOnInit() {
  }

}





