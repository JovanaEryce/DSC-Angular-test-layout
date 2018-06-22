import { Injectable } from '@angular/core';



@Injectable()
export class ContentService {
  pages: Object = {
    // tslint:disable-next-line:max-line-length
    'home': { title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content', image: 'assets/img/digital-product-designer-london.png'},
    // tslint:disable-next-line:max-line-length
    'about': { title: 'About us', subtitle: 'Welcome About Us!', content: 'Some about content', image: ''},
    // tslint:disable-next-line:max-line-length
    'work': { title: 'Work', subtitle: 'Welcome Work!', content: 'Some work content', image: ''},
    // tslint:disable-next-line:max-line-length
    'contact': { title: 'Contact', subtitle: 'Welcome Contact!', content: 'Some contact content', image: ''},
  };
  constructor() { }

}
