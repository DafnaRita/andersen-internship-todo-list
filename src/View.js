import EventEmitter from './EventEmitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        setTimeout(() => {
            this.emit('enterTask', 'do something');
        }, 1000);

        setTimeout(() => {
            this.emit('enterTask', 'do something else');
        }, 2000);
    }

    static renderNewItem(item) {
        console.log(`render new item with label: ${item.task}`);
    }
}
