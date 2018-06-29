import EventEmitter from './EventEmitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.itemInput = document.querySelector('div.app-container input[name=item]');
        this.button = document.querySelector('div.app-container button[name=addItem]');
        this.getItemName = () => document.querySelector('div.app-container > input[name=item]').value;
        this.addEvents();
    }

    addEvents() {
        this.button.addEventListener('click', () => {
            if (View.isInputFieldEmpty()) {
                return;
            }
            this.emit('enterItem', this.getItemName());
            View.cleanInputField();
        });

        this.itemInput.addEventListener('keypress', (e) => {
            if (View.isInputFieldEmpty()) {
                return;
            }
            if (e.key === 'Enter') {
                this.emit('enterItem', this.getItemName());
                View.cleanInputField();
            }
        });
    }

    static cleanInputField() {
        document.querySelector('div.app-container > input[name=item]').value = '';
    }

    static isInputFieldEmpty() {
        return document.querySelector('div.app-container > input[name=item]').value === '';
    }

    static renderItems(renderInfo) {
        renderInfo.items.forEach((item) => {
            const listItem = document.createElement('li');
            const label = document.createTextNode(item.label);
            listItem.setAttribute('id', item.id);
            listItem.appendChild(label);
            document.querySelector('div.list-container > ul.list').appendChild(listItem);
        });
    }
}
