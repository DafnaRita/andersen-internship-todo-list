export default class Item {
    constructor(description, id) {
        this.id = id;
        this.description = description;
        this.isClosed = false;
    }

    closeItem() {
        this.isClosed = true;
    }
}
