import EventEmitter from './EventEmitter';
import actionTypes from './helpers/actionTypes';
import ItemRenderHelper from './helpers/ItemRenderHelper';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.taskInput = document.getElementById('task-description');
        this.buttonAddingElement = document.getElementById('add-task');
        this.taskList = document.getElementById('list');
        this.getInputValue = () => document.getElementById('task-description').value;
        this.addEvents();
    }

    addEvents() {
        this.buttonAddingElement.addEventListener('click', () => {
            if ((View.inputField.length === 0 || !View.inputField.trim())) {
                return;
            }
            this.emit(actionTypes.ENTER_ITEM, this.getInputValue());
            View.inputField = '';
        });

        this.taskInput.addEventListener('keypress', (e) => {
            if ((View.inputField.length === 0 || !View.inputField.trim())) {
                return;
            }
            if (e.key === 'Enter') {
                this.emit(actionTypes.ENTER_ITEM, this.getInputValue());
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
            const itemRH = new ItemRenderHelper(this.view.taskList);
            itemRH.generateItem(item.description);
            itemRH.addId(item.id);
            itemRH.renderItem();
        });
    }
}
