import generateId from './helpers/GeneratorId';
import Item from './Item';

export default class Model {
    constructor() {
        this.items = new Map();
    }

    static convertItem(label) {
        const id = generateId();
        const item = new Item(label, id);
        return item;
    }

    addItem(item) {
        console.log(`added Item with label - ${item.label} and id - ${item.id} to Model `);
        this.items.set(item.id, item);
        return this.items.get(item.id);
    }
}
