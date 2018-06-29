export default class GeneratorId {
    constructor() {
        this.getGeneratorID = () => {
            return () => Math.random().toString(10).slice(2, 5);
        };
    }
}
