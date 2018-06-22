import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[] = [
    new Article('NEM', 'http://www.diztinct.co.uk/images/portfolio-uploads/user-interface-design-medtronic-lms-hero.jpg'),
    new Article('Delta WMS', 'http://www.diztinct.co.uk/images/portfolio-uploads/digital-product-design-deltawms-tmb.jpg'),
    new Article('Medtronic', 'http://www.diztinct.co.uk/images/portfolio-uploads/ui-design-food-specificaation-tmb.jpg'),
    new Article('E-pprove', 'http://www.diztinct.co.uk/images/portfolio-uploads/digital-product-design-epprove.jpg'),
    new Article('Food Specification', 'http://www.diztinct.co.uk/images/portfolio-uploads/silvercross-web-design-tmb.jpg'),
    new Article('This Worked Well', 'http://www.diztinct.co.uk/images/portfolio-uploads/web-design-lazenby-tmb.jpg'),
    // tslint:disable-next-line:max-line-length
    new Article('Pianola', 'http://www.diztinct.co.uk/images/portfolio-uploads/digital-product-design-london-falcon-data-brand-tmb.jpg'),
    new Article('Fleet On Demand', 'http://www.diztinct.co.uk/images/portfolio-uploads/digital-product-tww-hero-tmb.jpg'),
    new Article('Falcon Data', 'http://www.diztinct.co.uk/images/portfolio-uploads/web-design-stonebridge-homes-tmb.jpg'),
    new Article('Stonebridge Homes', 'http://www.diztinct.co.uk/images/portfolio-uploads/enterprise-digital-product-design-fod-tmb.jpg'),
    new Article('Lazenby', 'http://www.diztinct.co.uk/images/img16.jpg'),
    new Article('Webanywhere', 'http://www.diztinct.co.uk/images/portfolio-uploads/web-design-denton-associates-tmb.jpg'),

    new Article('Mad Hatter Tea', 'http://www.diztinct.co.uk/images/portfolio-uploads/user-interface-design-asda-tmb.jpg'),
    new Article('Silver Cross', 'http://www.diztinct.co.uk/images/portfolio-uploads/digital-design-mmto-tmb.jpg'),
    // tslint:disable-next-line:max-line-length
    new Article('Denton Associates', 'http://www.diztinct.co.uk/images/portfolio-uploads/user-interface-design-british-safety-council-tmb.jpg'),
    new Article('Ward 8', 'http://www.diztinct.co.uk/images/portfolio-uploads/user-interface-design-e-learning-london-tmb.jpg'),
    new Article('British Safety Council', 'http://www.diztinct.co.uk/images/portfolio-uploads/brand-identity-renovotec-tmb.jpg'),
    new Article('Be Safe', 'http://www.diztinct.co.uk/images/brand-identity-webanywhere-tmb.jpg'),

    new Article('Renovotec', 'http://www.diztinct.co.uk/images/img26.jpg'),
    new Article('Bic', 'http://www.diztinct.co.uk/images/img15.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
