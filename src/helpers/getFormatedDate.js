export default function getCurrentDate() {
    const d = new Date();
    return `${[d.getHours(), d.getMinutes(), d.getSeconds()].join(':')}`;
}
