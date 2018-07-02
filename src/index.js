import './css/style.css';
import Model from './Model';
import View from './View';
import Controller from './Controller';
import EventLogger from './helpers/EventLogger';

const view = new View();
const model = new Model();
const controller = new Controller(view, model);

const logConfig = {
    infoLevel: true,
    errorLevel: false,
};

const lol = new EventLogger(logConfig);
lol.info(2);
