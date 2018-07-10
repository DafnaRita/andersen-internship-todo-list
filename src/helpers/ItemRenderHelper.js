import { buttonsInfo } from './itemButtonsTypes';

export default class ItemRenderHelper {
    constructor(taskList, itemId) {
        this.taskList = taskList;
        this.itemId = itemId;
    }

    deleteItem() {
        this.item = document.getElementById(this.itemId);
        this.taskList.removeChild(this.item);
    }

    completeItem() {
        this.item = document.getElementById(this.itemId).classList.add('task-comleted');
    }

    generateItem(description) {
        this.item = document.createElement('li');

        /* generate description with container  */
        const descriptionContainer = document.createElement('div');
        descriptionContainer.setAttribute('class', 'description-container');
        descriptionContainer.appendChild(document.createTextNode(description));
        this.item.appendChild(descriptionContainer);

        /* generate buttons */
        buttonsInfo.forEach((button) => {
            const createdButton = document.createElement('button');
            createdButton.setAttribute('class', button.buttonClass);
            createdButton.appendChild(document.createTextNode(button.icon));
            this.item.appendChild(createdButton);
        });
    }

    addProperties() {
        this.item.setAttribute('id', this.itemId);
        this.item.setAttribute('class', 'task');
    }

    renderItem(description) {
        this.generateItem(description);
        this.addProperties();
        this.taskList.appendChild(this.item);
        return this.item;
    }
}
