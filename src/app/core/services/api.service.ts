import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../articles/article/article';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    public getLatestArticles(): Observable<Article[]> {
        return this.http.get<Article[]>(API_URL + '/articles');
    }
}
