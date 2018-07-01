import Model from './Model';
import ACTIONS from './helpers/actionTypes';

export default class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.setEventEmitters();
    }

    setEventEmitters() {
        this.view.on(ACTIONS.ENTER_ITEM, this.addItem.bind(this));
        this.view.on(ACTIONS.ADD_ITEM_TO_MODEL, this.addItemToModel.bind(this));
        this.view.on(ACTIONS.RENDER_ITEM, this.view.renderItems.bind(this));
    }

    addItemToModel(description) {
        const item = Model.convertItem(description);
        const newItem = this.model.addItem(item, this.view);
        this.view.emit(ACTIONS.RENDER_ITEM, {
            items: [newItem],
        });
    }

    addItem(description) {
        this.view.emit(ACTIONS.ADD_ITEM_TO_MODEL, description);
    }
}
