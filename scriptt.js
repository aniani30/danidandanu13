const loveButton = document.querySelector('#love');
const confettiCanvas = document.querySelector('#confetti');

const myJSConfetti = new JSConfetti();

loveButton.addEventListener('click', () => {
    myJSConfetti.addConfetti({
        emojis: ['💙', '💚', '💝', '💖', '💫', '💗', '💞', '👩🏻‍❤️‍👨🏽', '👩🏻‍❤️‍💋‍👨🏽', '🌷'],
    }).then(() => myJSConfetti.addConfetti())
})
