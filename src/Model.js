import generateId from './helpers/generateId';
import Item from './Item';

export default class Model {
    constructor() {
        this.itemsMap = new Map();
    }

    static convertItem(description) {
        const id = generateId();
        const item = new Item(description, id);
        return item;
    }

    addItem(item) {
        console.log(`added Item with description - ${item.description} and id - ${item.id} to Model `);
        this.itemsMap.set(item.id, item);
        return this.itemsMap.get(item.id);
    }

    deleteItem(itemId) {
        this.itemsMap.delete(itemId);
        console.log(`was deleted item with Id - ${itemId}`);
    }

    editItemById(editedItemInfo) {
        this.itemsMap.get(editedItemInfo.id).description = editedItemInfo.newDescripton;
        console.log(`changed description - ${this.itemsMap.get(editedItemInfo.id).description} of item  and id - ${this.itemsMap.get(editedItemInfo.id).id}`);
    }

    completeItem(itemId) {
        this.itemsMap.get(itemId).isClosed = true;
        console.log(`The task with id - ${itemId} is completed`);
    }
}
