const myEmojis = ["👨‍💻", "🏕", "⛷"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById('unshift-btn');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');


function renderEmojis() {
    // Clear the old version of the array that diplay old emojis
    emojiContainer.innerHTML = '';

    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

renderEmojis();

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        // Set the emoji to the end of my array
        myEmojis.push(emojiInput.value);
        // Clear inuts
        emojiInput.value = '';
        // Render the update array to to mini-browser
        renderEmojis();
    }
})

unshiftBtn.addEventListener('click', function() {
    if(emojiInput.value) {
        // Set the emoji to the beginning of my array
        myEmojis.unshift(emojiInput.value);
        // Clear the input 
        emojiInput.value = '';
        // Render the update array to the mini-browser
        renderEmojis();
    }
})

popBtn.addEventListener('click', function() {
    // Delete the last item of the array
    myEmojis.pop();
    // Render the update array to the mini-browser
    renderEmojis();
})

shiftBtn.addEventListener('click', function() {
    // Delete the first item to the array
    myEmojis.shift();
    // Render the update array to the mini-browser
    renderEmojis();
})