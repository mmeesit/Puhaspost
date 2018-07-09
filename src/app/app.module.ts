import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {ArticleDataService} from './articles/shared/article-data.service';
import {ApiService} from './core/services/api.service';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleListItemComponent } from './articles/article-list-item/article-list-item.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleListItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArticleDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
