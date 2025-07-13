// Text to be typed
const text1 = "I'm a passionate front-end developer creating digital experiences that users love. My approach is to deliver solutions that are both beautiful and functional.";
const text2 = " I specialize in front-end development, and creating responsive websites that work seamlessly across all devices.";

// Code to be displayed
const codeContent = [
    '<span> HTML5, CSS3, JAVASCRIPT, PYTHON, JAVA, GIT, GITHUB. </span>',
    '<span> MONGODB, EXPRESSJS, REACT, NODEJS. </span>',

].join('\n');

// Typing animation function
function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    type();
}

// Code typing animation
function typeCode(element, code, speed, callback) {
    const lines = code.split('\n');
    let currentLine = 0;
    let currentChar = 0;
    element.innerHTML = '';
    function typeLine() {
        if (currentLine < lines.length) {
            if (currentChar < lines[currentLine].length) {
                element.innerHTML += lines[currentLine].charAt(currentChar);
                currentChar++;
                setTimeout(typeLine, speed);
            } else {
                element.innerHTML += '\n';
                currentLine++;
                currentChar = 0;
                setTimeout(typeLine, speed);
            }
        } else if (callback) {
            callback();
        }
    }

    typeLine();
}

// Start all animations
function startAnimations() {
    typeWriter(document.getElementById('text1'), text1, 30, () => {
        typeWriter(document.getElementById('text2'), text2, 30, () => {
            setTimeout(() => {
                typeCode(document.getElementById('code-display'), codeContent, 20);
            }, 500);
        });
    });
}
// Initialize on load
window.addEventListener('DOMContentLoaded', startAnimations);

// Replay button
document.getElementById('replay-btn').addEventListener('click', () => {
    document.getElementById('text1').innerHTML = '';
    document.getElementById('text2').innerHTML = '';
    document.getElementById('code-display').innerHTML = '';
    startAnimations();
});


// # joke of the day

 document.addEventListener('DOMContentLoaded', function() {
        const jokes = [
            "Why don't scientists trust atoms? Because they make up everything! 👩‍🔬⚛️",
            "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them! ➖🧮",
            "Why don't skeletons fight each other? They don't have the guts! 💀👊",
            "I told my wife she was drawing her eyebrows too high. She looked surprised. 😲👩",
            "What do you call a fish wearing a bowtie? Sofishticated. 🎩🐠",
            "How do you organize a space party? You planet! 🚀🎉",
            "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾🏆",
            "What did one wall say to the other wall? I'll meet you at the corner! 🧱📐",
            "What's orange and sounds like a parrot? A carrot! 🥕🦜", 
            "How do you make a tissue dance? Put a little boogie in it! 💃🤧",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one! ⛳👖",
            "How do you follow Will Smith in the snow? You follow the fresh prints! ❄️👣", 
            "What do you call a snowman with a six-pack? An abdominal snowman! ⛄💪",
            "Why did the bicycle fall over? Because it was two-tired! 🚲😴"
        ];
        
        const jokeDisplay = document.getElementById('jokeDisplay');
        const jokeBtn = document.getElementById('jokeBtn');
        let currentJokeIndex = 0;
        
        function displayRandomJoke() {
            currentJokeIndex = Math.floor(Math.random() * jokes.length);
            jokeDisplay.textContent = jokes[currentJokeIndex];

            // Add color animation
            jokeBtn.classList.add('joke-btn-clicked');
            setTimeout(() => {
                jokeBtn.classList.remove('joke-btn-clicked');
            }, 500);
            
            // Animation effect
            jokeDisplay.style.transform = 'scale(0.8) translateZ(0)';
            jokeDisplay.style.opacity = '0';
            setTimeout(() => { 
                  jokeDisplay.textContent = jokes[currentJokeIndex];
                jokeDisplay.style.transform = 'scale(1) translateZ(20px)';
                jokeDisplay.style.opacity = '1';
            }, 150);
        }
        
        jokeBtn.addEventListener('click', displayRandomJoke);
        displayRandomJoke();
    });