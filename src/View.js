import EventEmitter from './EventEmitter';

export default class View extends EventEmitter {
    constructor() {
        super();
        this.itemInput = document.getElementById('label-value');
        this.button = document.getElementById('add-item');
        this.list = document.getElementById('list');
        this.getItemName = () => document.getElementById('label-value').value;
        this.addEvents();
    }

    addEvents() {
        this.button.addEventListener('click', () => {
            if (View.isInputFieldEmpty) {
                return;
            }
            this.emit('enterItem', this.getItemName());
            View.inputField = '';
        });

        this.itemInput.addEventListener('keypress', (e) => {
            if (View.isInputFieldEmpty) {
                return;
            }
            if (e.key === 'Enter') {
                this.emit('enterItem', this.getItemName());
                View.inputField = '';
            }
        });
    }

    static set inputField(v) {
        document.getElementById('label-value').value = v;
    }

    static get isInputFieldEmpty() {
        return document.getElementById('label-value').value === '';
    }

    renderItems(renderInfo) {
        renderInfo.items.forEach((item) => {
            const listItem = document.createElement('li');
            const label = document.createTextNode(item.label);
            listItem.setAttribute('id', item.id);
            listItem.appendChild(label);
            this.list.appendChild(listItem);
        });
    }
}
