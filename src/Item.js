export default class Item {
    constructor(label, id) {
        this.isClosed = false;
        this.label = label;
        this.id = id;
    }

    closeItem() {
        this.isClosed = true;
    }
}
