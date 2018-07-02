import getCurrentDate from './getFormatedDate';

const logLevel = {
    info: { color: 'color: blue;' },
    warn: { color: 'color: orange;' },
};

export default function eventLogger(conf) {
    this.messageTemplate = '%c[%s] [TIME]%s [%s] [PAYLOAD]%s';
    this.config = conf;
    this.setLogLevel = (level) => {
        if (this.config[level]) {
            this[level] = (event, payload) => {
                console.log(this.messageTemplate,
                    logLevel[level].color,
                    level, getCurrentDate(),
                    event, payload);
            };
        } else {
            this[level] = () => {};
        }
    };
    Object.keys(logLevel).forEach(level => this.setLogLevel(level));
}
