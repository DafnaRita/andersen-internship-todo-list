export default class Item {
    constructor(task) {
        this.isClosed = false;
        this.task = task;
    }

    closeItem() {
        this.isClosed = true;
    }
}
