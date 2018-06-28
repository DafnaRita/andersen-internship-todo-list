import './css/style.css';
import Model from './Model';
import View from './View';

const view = new View();
const model = new Model();

model.on('addedItem', item => View.renderNewItem(item));
view.on('enterTask', task => model.addItem(task));
