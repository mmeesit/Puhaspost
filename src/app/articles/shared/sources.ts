import { Square } from './square';

export class Sources {
    square: Square;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
