import EventEmitter from './EventEmitter';

export default class Controller extends EventEmitter {
    constructor() {
        super();
    }

    addItem(label) {
        this.emit('addItem', label);
    }
}
