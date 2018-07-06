export default class ItemRenderHelper {
    constructor(taskList) {
        this.taskList = taskList;
    }

    generateItem(description) {
        this.item = document.createElement('li');
        const itemDescription = document.createTextNode(description);
        this.item.appendChild(itemDescription);
    }

    addId(id) {
        this.item.setAttribute('id', id);
        this.item.setAttribute('class', 'task');
    }

    renderItem() {
        this.taskList.appendChild(this.item);
    }
}
