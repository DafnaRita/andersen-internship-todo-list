export default class ItemContanteEditHelper {
    constructor(itemId) {
        this.itemId = itemId;
        [this.descriptionContainer] = document
            .getElementById(this.itemId)
            .getElementsByClassName('description-container');
    }

    makeItenContantEditable(condition) {
        this.descriptionContainer.setAttribute('contenteditable', condition);
    }

    addEditContantAbility() {
        this.makeItenContantEditable(true);

        /* after enter clicked to remove edit ability */
        this.descriptionContainer.addEventListener('keydown', (event) => {
            if (event.key !== 'Enter') return;
            /* it triggers a focusout */
            this.makeItenContantEditable(false);
        });

        /* after focusout clicked to remove edit ability */
        this.descriptionContainer.addEventListener('focusout', () => {
            /* it triggers a focusout */
            this.makeItenContantEditable(false);
        });
    }
}
