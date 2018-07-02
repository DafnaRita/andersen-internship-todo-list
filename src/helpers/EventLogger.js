export default function EventLogger(config) {

    Object.keys(config).forEach((fld) => {
        if (config.hasOwnProperty(fld)) {
            this[fld] = config[fld];
        }
    });
}

EventLogger.prototype.info = function info(str) {
    if (this.info) {
        return console.log(
            '%c[INFO]:%s:%s:',
            'color: blue;',
            '02/07/18-02:13',
            str,
        );
    }
    return null;
};

EventLogger.prototype.error = function info(str) {
    if (this.info) {
        return console.log('%c[ERROR]:%s:%s', 'color: blue;', '02/07/18-02:13', str);
    }
    return null;
};
