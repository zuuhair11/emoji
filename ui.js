class UI {
    constructor() {
        this.emojiContainer = document.getElementById("emoji-container");
        this.emojiInput = document.getElementById("emoji-input");
    }

    renderEmojis(emojis) {
        // Clear the old version of the array that diplay old emojis
        this.emojiContainer.innerHTML = '';

        for(let i = 0; i < emojis.length; i++) {
            const emoji = document.createElement('span');
            emoji.textContent = emojis[i];
            this.emojiContainer.append(emoji);
        }

        // Clear inuts
        ui.clearInput();
    }

    clearInput() {
        this.emojiInput.value = '';
    }
}