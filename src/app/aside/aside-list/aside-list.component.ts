import { Component, OnInit } from '@angular/core';
import { Aside } from '../aside.model';

@Component({
  selector: 'app-aside-list',
  templateUrl: './aside-list.component.html',
  styleUrls: ['./aside-list.component.css']
})
export class AsideListComponent implements OnInit {

  asides: Aside[] = [
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/digital-products-icon.svg', 'Digital Products', 'Enterprise systems, e-commerce, web applications, and consumer digital products.' ),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/user-interface-design-icon.svg', 'User Interface', 'Scaffolding, grids, navigation, iconography, interaction patterns, input elements and UI kits.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/user-experience-design-icon.svg', 'User Experience', 'Architecture, user flows, wireframes, user personas, prototypes, and animation.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/visual-design-icon.svg', 'Visual Design', 'Typography, colour theory, art direction, data visualisation and conceptual prototypes.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/brand-design-icon.svg', 'Brand', 'Identity, vision, values, architecture, tone of voice, touch points and brand expression.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/ux-research-icon.svg', 'Research', 'Qualitative, quantitive, workshops, one-to-one interviews, customer experience and 360 audits.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/strategy-icon.svg', 'Strategy', 'Positioning, commercial models, team development, marketing and defining product requirements.'),
    // tslint:disable-next-line:max-line-length
    new Aside('http://www.diztinct.co.uk/images/svg/optimisation-icon.svg', 'Optimisation', 'Conversion rate optimisation, search engine optimisation and continuous product iteration.')
  ];
  constructor() { }

  ngOnInit() {
  }

}
