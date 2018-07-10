import Model from './Model';
import actionTypes from './helpers/actionTypes';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.setEventEmitters();
    }

    setEventEmitters() {
        this.view.on(actionTypes.ENTER_ITEM, this.addItemToModel.bind(this));
        this.view.on(actionTypes.RENDER_ITEM, this.view.renderItems.bind(this));
        this.view.on(actionTypes.EDITED_ITEM, this.model.editItemById.bind(this.model));
        this.view.on(actionTypes.DELETED_ITEM, this.model.deleteItem.bind(this.model));
    }

    addItemToModel(description) {
        const item = Model.convertItem(description);
        const newItem = this.model.addItem(item);
        this.view.emit(actionTypes.RENDER_ITEM, {
            items: [newItem],
        });
    }
}
