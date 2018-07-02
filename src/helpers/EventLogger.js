import getCurrentDate from './getFormatedDate';

const logLevel = {
    info: { color: 'color: blue;' },
    warn: { color: 'color: orange;' },
};

export default function eventLogger(conf) {

    this.messageTemplate = '%c[%s] [TIME]%s [%s] [PAYLOAD]%s';

    this.setLogLevel = (level) => {
        this[level] = (event, payload) => {
            if (typeof payload === 'object') {
                payload = JSON.stringify(payload);
            }
            console.log(this.messageTemplate,
                logLevel[level].color,
                level, getCurrentDate(),
                event, payload);
        };
    };
    Object.keys(logLevel).forEach(level => this.setLogLevel(level));
}
