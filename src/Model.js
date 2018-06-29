import GeneratorId from './helpers/GeneratorId';
import Item from './Item';

export default class Model {
    constructor() {
        this.items = new Map();
        this.generatorId = new GeneratorId().getGeneratorID();
        console.log(this.generatorId);
    }

    convertToItem(label) {
        const id = this.generatorId();
        const item = new Item(label, id);
        return item;
    }

    addItem(item) {
        console.log(`added Item with label - ${item.label} and id - ${item.id} to Model `);
        this.items.set(item.id, item);
        return this.items.get(item.id);
    }
}
