import {Thumbnail} from '../shared/thumbnail';

export class Article {
    id: number;
    type: '';
    headline: '';
    thumbnail: Thumbnail;

    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
