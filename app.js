// Instantiate an ui object
const ui = new UI();

const myEmojis = ["👨‍💻", "🏕", "⛷"];
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById('unshift-btn');
const popBtn = document.getElementById('pop-btn');
const shiftBtn = document.getElementById('shift-btn');

ui.renderEmojis(myEmojis);

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        // Set the emoji to the end of my array
        myEmojis.push(emojiInput.value);

        // Render the emojis on the array to the mini-browser
        ui.renderEmojis(myEmojis);
    }
})

unshiftBtn.addEventListener('click', function() {
    if(emojiInput.value) {
        // Set the emoji to the beginning of my array
        myEmojis.unshift(emojiInput.value);

        // Render the emojis on the array to the mini-browser
        ui.renderEmojis(myEmojis);
    }
})

popBtn.addEventListener('click', function() {
    // Delete the last item of the array
    myEmojis.pop();
    
    // Render the emojis on the array to the mini-browser
    ui.renderEmojis(myEmojis);
})

shiftBtn.addEventListener('click', function() {
    // Delete the first item to the array
    myEmojis.shift();
    
    // Render the emojis on the array to the mini-browser
    ui.renderEmojis(myEmojis);
})