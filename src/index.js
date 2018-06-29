import './css/style.css';
import Model from './Model';
import View from './View';
import Controller from './Controller';

const view = new View();
const model = new Model();
const controller = new Controller();

controller.on('addItem', (label) => {
    const item = model.convertToItem(label);
    model.addItem(item);
});
model.on('addedItem', (items) => {
    View.renderItems(items);
});
view.on('enterItem', label => controller.addItem(label));
