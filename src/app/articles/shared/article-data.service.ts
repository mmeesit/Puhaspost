import { Injectable } from '@angular/core';
import { Article } from '../article/article';
import { ApiService } from '../../core/services/api.service';
import { Observable } from 'rxjs';

@Injectable()

export class ArticleDataService {
    constructor(private api: ApiService) { }

    getLatestArticles(): Observable<Article[]> {
        return this.api.getLatestArticles();
    }
}
