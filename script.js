const textElement = document.getElementById('intro-text');
const text = 'WE FLEX';
let index = 1;


function showNextLetter() {
    if (index <= text.length) {
        textElement.textContent = text.slice(0, index);
        index++;
        setTimeout(showNextLetter, 200);
    } else {
        // Show the login form when the animation is complete
        const intro = document.getElementById('introduction');
        intro.remove();;
    }
}


showNextLetter();



function toggleMenu(button) {
    const textContainer = button.parentElement.querySelector('.text-container');
    const containerMore = button.parentElement.querySelector('.container-more');
    const buttonText = button;

    if (textContainer.style.display === "none" || textContainer.style.display === "") {
        containerMore.style.display = "none";
        textContainer.style.display = "inline";
        buttonText.textContent = "Show More";
    } else {
        containerMore.style.display = "inline";
        textContainer.style.display = "none";
        buttonText.textContent = "Show Less";
    }
}





