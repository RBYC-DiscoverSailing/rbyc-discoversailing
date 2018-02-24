const myPage = (superClass) => {
    return class extends superClass {
        static get properties() {
            return {
                // implement onIsVisibleChanged in element class
                isVisible: {
                    type: Boolean,
                    reflectToAttribute: true,
                    observer: 'onIsVisibleChanged'
                }
            };
        }
    }
}