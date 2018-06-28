import EventEmitter from './EventEmitter';

export default class Controller extends EventEmitter {
    constructor() {
        super();
    }

    addItem(task) {
        this.emit('addItem', task);
    }
}
