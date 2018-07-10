export default class Item {
    constructor(description, id) {
        this.id = id;
        this._description = description;
        this.isClosed = false;
    }

    closeItem() {
        this.isClosed = true;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }
}
