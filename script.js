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

function selectAccount(accountNumber) {
    // You can perform actions here when a button is clicked
    alert('Selected Account ' + accountNumber);
    // You can replace the alert with your custom logic.
}

showNextLetter();


/*function toggleMore() {
    var moreText = document.getElementById("more-text");
    var moreBtn = document.getElementById("more-btn");
    moreText.style.display = moreText.style.display === "none" ? "block" : "none";
    moreBtn.style.display = moreBtn.style.display === "none" ? "block" : "none";
}

function toggleMenu() {
    const More = document.querySelector(".Button-moreinfo");
    More.classList.toggle("open");  
}*/

/*function toggleMenu() {
 
    // Get all the elements from the page
    const points = document.getElementById("text-container");
    const showMoreText = document.getElementById("container-more");
    let buttonText = document.getElementById("Buttton-moreinfo");


    if (points.style.display ==  "none") {
 
        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";

        //showMoreText.style.display = showMoreText.style.display === "none" ? "block" : "none";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}*/

function toggleMenu(button) {
 
    // Get all the elements from the page
    const points = button.parentElement.querySelector("text-container");
    const showMoreText = button.document.parentElement.querySelector("container-more");
    const buttonText = button;


    if (points.style.display ==  "none") {
 
        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";
        
        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}





