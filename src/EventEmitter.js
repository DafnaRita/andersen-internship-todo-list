export default class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    on(label, callback) {
        if (!(this.listeners.has(label))) {
            this.listeners.set(label, []);
        }
        this.listeners.get(label).push(callback);
    }

    emit(label, ...args) {
        const invokedListeners = this.listeners.get(label);
        if (invokedListeners.length > 0) {
            invokedListeners.forEach((listener) => {
                listener(...args);
            });
            return true;
        }

        return false;
    }
}
