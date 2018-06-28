import Item from './Item';
import EventEmitter from './EventEmitter';

export default class Model extends EventEmitter {
    constructor() {
        super();
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

    static convertToItem(task) {
        const i = new Item(task);
        return i;
    }

    addItem(item) {
        const id = this.getID();
        console.log(`added Item with id - ${id} and task - ${item.task} to Model `);
        this.items.set(id, item);
        this.emit('addedItem', item);
    }
}
