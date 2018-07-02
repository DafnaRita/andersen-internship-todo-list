import generateId from './helpers/generateId';
import Item from './Item';

export default class Model {
    constructor() {
        this.items = new Map();
    }

    static convertItem(description) {
        const id = generateId();
        const item = new Item(description, id);
        return item;
    }

    addItem(item) {
        // console.log(`added Item with description - ${item.description} and id - ${item.id} to Model `);
        this.items.set(item.id, item);
        return this.items.get(item.id);
    }
}
