import { AsideComponent } from './aside/aside.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContentService } from './shared/services/content.service';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { ArticleItemComponent } from './articles/articles-list/article-item/article-item.component';
import { PanelComponent } from './panel/panel.component';
import { AsideListComponent } from './aside/aside-list/aside-list.component';
import { AsideItemComponent } from './aside/aside-list/aside-item/aside-item.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { BigItemComponent } from './about/big-item/big-item.component';
import { MediumItemComponent } from './about/medium-item/medium-item.component';
import { PicItemComponent } from './about/pic-item/pic-item.component';
import { BgdItemComponent } from './about/bgd-item/bgd-item.component';
import { SmallItemComponent } from './about/small-item/small-item.component';
import { FormComponent } from './contact/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ArticlesComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    PanelComponent,
    AsideComponent,
    AsideListComponent,
    AsideItemComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    BigItemComponent,
    MediumItemComponent,
    PicItemComponent,
    BgdItemComponent,
    SmallItemComponent,
    FormComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
