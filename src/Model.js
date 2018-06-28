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

    addItem(task) {
        const id = this.getID();
        console.log(`added Item with id - ${id} and task - ${task}`);
        const i = new Item(task);
        this.items.set(id, i);
        this.emit('addedItem', i);
    }
}
