import './css/style.css';
import Model from './Model';
import View from './View';
import Controller from './Controller';

const view = new View();
const model = new Model();
const controller = new Controller();

controller.on('addItem', (task) => {
    const item = Model.convertToItem(task);
    model.addItem(item);
});
model.on('addedItem', item => View.renderNewItem(item));
view.on('enterTask', task => controller.addItem(task));

setTimeout(() => {
    console.log('Current state of model');
    console.log(model.items);
}, 3000);
