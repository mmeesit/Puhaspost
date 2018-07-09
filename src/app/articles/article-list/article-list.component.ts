import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  @Input()
  articles: Article[];

  constructor() { }
}
