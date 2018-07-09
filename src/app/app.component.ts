import {Component, OnInit} from '@angular/core';
import {ArticleDataService} from './articles/shared/article-data.service';
import {Article} from './articles/article/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleDataService]
})
export class AppComponent implements OnInit {
  title = 'Postimees testi äpp';

  articles: Article[] = [];

  constructor(private articleDataService: ArticleDataService) { }

  public ngOnInit() {
      this.articleDataService
          .getLatestArticles()
          .subscribe(
              (articles) =>  {
                  this.articles = articles;
              }
          );
  }
}
