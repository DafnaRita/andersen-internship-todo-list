import View from './View';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.setEventEmitters();
    }

    setEventEmitters() {
        this.view.on('enterItem', label => this.addItem(label));

        this.view.on('addItemToModel', (label) => {
            const item = this.model.convertToItem(label);
            const newItem = this.model.addItem(item, this.view);
            this.view.emit('itemAdded', {
                items: [newItem],
            });
        });
        this.view.on('itemAdded', (items) => {
            View.renderItems(items);
        });
    }

    addItem(label) {
        this.view.emit('addItemToModel', label);
    }
}
