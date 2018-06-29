import Model from './Model';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.setEventEmitters();
    }

    setEventEmitters() {
        this.view.on('enterItem', label => this.addItem(label));
        this.view.on('addItemToModel', label => this.addItemToModel(label));
        this.view.on('itemAdded', (items) => {
            this.view.renderItems(items);
        });
    }

    addItemToModel(label) {
        const item = Model.convertItem(label);
        const newItem = this.model.addItem(item, this.view);
        this.view.emit('itemAdded', {
            items: [newItem],
        });
    }

    addItem(label) {
        this.view.emit('addItemToModel', label);
    }
}
