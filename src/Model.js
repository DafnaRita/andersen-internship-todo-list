import Item from './Item';

export default class Model {
    constructor() {
        let nextID = 0;
        const getGeneratorID = () => {
            return () => {
                nextID += 1;
                return nextID;
            };
        };

        this.items = new Map();
        this.getID = getGeneratorID(nextID);
    }

    convertToItem(label) {
        const id = this.getID();
        const item = new Item(label, id);
        return item;
    }

    addItem(item) {
        console.log(`added Item with label - ${item.label} and id - ${item.id} to Model `);
        this.items.set(item.id, item);
        return this.items.get(item.id);
    }
}
