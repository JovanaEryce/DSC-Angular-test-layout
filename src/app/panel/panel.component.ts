import { Component, OnInit } from '@angular/core';
import { Panel } from './panel.module';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  panels: Panel[] = [
    new Panel('assets/img/panel-ico1.png', 'UI Design'),
    new Panel('assets/img/panel-ico2.png', 'Web Design'),
    new Panel('assets/img/panel-ico3.png', 'Responsive'),
    new Panel('assets/img/panel-ico4.png', 'Brand'),
    new Panel('assets/img/panel-ico5.png', 'Creative')
  ];
  constructor() { }

  ngOnInit() {
  }

}


