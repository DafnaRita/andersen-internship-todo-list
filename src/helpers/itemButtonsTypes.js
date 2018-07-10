const keyMirror = require('keymirror');

const buttonTypes = keyMirror({
    EDIT_BUTTON: null,
    COMPLETE_BUTTON: null,
    DELETE_BUTTON: null,
});

const buttonsInfo = new Map();

/* set class and icon values */
buttonsInfo.set(buttonTypes.EDIT_BUTTON, { buttonClass: 'edit-task-button', icon: '✎' });
buttonsInfo.set(buttonTypes.COMPLETE_BUTTON, { buttonClass: 'ready-task-button', icon: '✔' });
buttonsInfo.set(buttonTypes.DELETE_BUTTON, { buttonClass: 'delete-task-button', icon: '✖' });

export { buttonTypes, buttonsInfo };
