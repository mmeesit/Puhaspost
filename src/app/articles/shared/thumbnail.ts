import { Author } from './author';
import { Sources } from './sources';

export class Thumbnail {
    id: number;
    type: '';
    author: Author;
    sources: Sources;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
