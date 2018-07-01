import EventEmitter from './EventEmitter';
import ACTIONS from './helpers/actionTypes';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.itemInput = document.getElementById('task-description');
        this.buttonAddingElement = document.getElementById('add-item');
        this.itemsList = document.getElementById('list');
        this.getInputValue = () => document.getElementById('task-description').value;
        this.addEvents();
    }

    addEvents() {
        this.buttonAddingElement.addEventListener('click', () => {
            if ((View.inputField.length === 0 || !View.inputField.trim())) {
                return;
            }
            this.emit(ACTIONS.ENTER_ITEM, this.getInputValue());
            View.inputField = '';
        });

        this.itemInput.addEventListener('keypress', (e) => {
            if ((View.inputField.length === 0 || !View.inputField.trim())) {
                return;
            }
            if (e.key === 'Enter') {
                this.emit(ACTIONS.ENTER_ITEM, this.getInputValue());
                View.inputField = '';
            }
        });
    }

    static set inputField(v) {
        document.getElementById('task-description').value = v;
    }

    static get inputField() {
        return document.getElementById('task-description').value;
    }

    renderItems(renderInfo) {
        renderInfo.items.forEach((item) => {
            const listItem = document.createElement('li');
            const description = document.createTextNode(item.description);
            listItem.setAttribute('id', item.id);
            listItem.appendChild(description);
            this.view.itemsList.appendChild(listItem);
        });
    }
}
