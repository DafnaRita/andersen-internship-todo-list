import './css/style.css';
import Model from './Model';
import View from './View';
import Controller from './Controller';
import EventLogger from './helpers/eventLogger';

const view = new View();
const model = new Model();
const controller = new Controller(view, model);

const logConfig = {
    info: false,
    warn: true,
};

const eventLogger = new EventLogger(logConfig);
window.logger = eventLogger;
