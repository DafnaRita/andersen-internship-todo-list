import EventEmitter from './EventEmitter';
import actionTypes from './helpers/actionTypes';
import ItemRenderHelper from './helpers/ItemRenderHelper';
import ItemContanteEditHelper from './helpers/ItemContanteEditHelper';
import { buttonTypes, buttonsInfo } from './helpers/itemButtonsTypes';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.taskInput = document.getElementById('task-description');
        this.buttonAddingElement = document.getElementById('add-task');
        this.taskList = document.getElementById('list');
        this.getInputValue = () => document.getElementById('task-description').value;
        this.addCommonListeners();
    }

    addCommonListeners() {
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
            const itemRH = new ItemRenderHelper(this.view.taskList, item.id);
            const renderedItem = itemRH.renderItem(item.description);
            this.view.addEditItemAbility(renderedItem);
            this.view.addDeleteItemAbility(renderedItem);
            this.view.addCompleteItemAbility(renderedItem);
        });
    }

    addDeleteItemAbility(renderedItem) {
        const [deleteButton] = renderedItem.getElementsByClassName(
            buttonsInfo.get(buttonTypes.DELETE_BUTTON).buttonClass,
        );

        /* delete item when a delete button is pressed */
        deleteButton.addEventListener('click', (event) => {
            const itemId = event.target.parentElement.id;
            const itemRH = new ItemRenderHelper(this.taskList, itemId);
            itemRH.deleteItem();
        });

        /* handle item was delete from list */
        renderedItem.addEventListener('click', (event) => {
            const itemId = event.target.parentElement.id;
            /* check a delete button was clicked */
            if (event.target.className !== buttonsInfo.get(buttonTypes.DELETE_BUTTON).buttonClass) {
                return;
            }
            this.emit(actionTypes.DELETED_ITEM, itemId);
        });
    }

    addEditItemAbility(renderedItem) {
        let initDescription;
        const [editButton] = renderedItem.getElementsByClassName(
            buttonsInfo.get(buttonTypes.EDIT_BUTTON).buttonClass,
        );

        /* make description editable on edit-button click */
        editButton.addEventListener('click', (event) => {
            const itemId = event.target.parentElement.id;
            const itemEH = new ItemContanteEditHelper(itemId);
            initDescription = document
                .getElementById(itemId)
                .getElementsByClassName('description-container')[0]
                .innerText;
            itemEH.addEditContantAbility(true);
        });

        /* handle description changing on focusout triggered by Enter key press or focusout */
        renderedItem.addEventListener('focusout', (event) => {
            /* check a description (not another elements) lost focus or was changed */
            if (event.target.className !== 'description-container') return;
            const currentDescription = event.target.innerText;
            const itemId = event.target.parentElement.id;

            /* check a description actually was changed */
            if (initDescription !== currentDescription) {
                this.emit(actionTypes.EDITED_ITEM, {
                    id: itemId,
                    newDescripton: currentDescription,
                });
            }
        });
    }

    addCompleteItemAbility(renderedItem) {
        const [completeButton] = renderedItem.getElementsByClassName(
            buttonsInfo.get(buttonTypes.COMPLETE_BUTTON).buttonClass,
        );

        /* complet item when a complete button is pressed */
        completeButton.addEventListener('click', (event) => {
            const itemId = event.target.parentElement.id;
            const itemRH = new ItemRenderHelper(this.taskList, itemId);
            itemRH.completeItem();
        });

        /* handle item was completes */
        renderedItem.addEventListener('click', (event) => {
            const itemId = event.target.parentElement.id;
            /* check a complete button(not another button) was clicked */
            if (event.target.className !== buttonsInfo.get(buttonTypes.COMPLETE_BUTTON).buttonClass) {
                return;
            }
            this.emit(actionTypes.COMPLETES_ITEM, itemId);
        });
    }
}
