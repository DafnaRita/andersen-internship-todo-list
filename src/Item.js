export default class Item {
    constructor(description, id) {
        this.id = id;
        this._description = description;
        this._isClosed = false;
    }

    get isClosed() {
        return this._isClosed;
    }

    set isClosed(condition) {
        if (condition === true) {
            this._isClosed = true;
        }
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }
}
