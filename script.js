const questions = [
    { a: "Receive a heartfelt love letter", b: "Have a surprise date night" },
    { a: "Have breakfast in bed", b: "Enjoy a romantic dinner" },
    { a: "Go on a beach vacation", b: "Stay in a cozy cabin getaway" },
    { a: "Receive a bouquet of roses", b: "Receive a box of chocolates" },
    { a: "Go on a scenic walk", b: "Take a romantic boat ride"},
    { a: "Be sung to", b: "Have a poem written for you"},
    { a: "Play Catan only", b: "Watch horror movies"},
    { a: "Go back to the Hamptons", b: "Go back to Florida"},
    { a: "Hang out with Jungkook for a week", b: "Fast forward a semester in dental school"},
    { a: "Not smoke for a year", b: "Not watch TV for a year"}
];

let currentIndex = 0;

function startQuiz() {
    // Hide intro page and show quiz page
    document.querySelector(".intro-container").style.display = "none";
    document.querySelector(".quiz-container").style.display = "block";
    
    updateQuestion();
}

function nextQuestion(selectedOption) {
    if (currentIndex < questions.length - 1) {
        currentIndex++;
        updateQuestion();
    } else {
        document.querySelector("#endMessage").style.display = "block";
        document.querySelector(".question").style.display = "none";
    }
}

function updateQuestion() {
    document.querySelector("#questionText").textContent = "Would you rather...";
    document.querySelector("#optionA").textContent = questions[currentIndex].a;
    document.querySelector("#optionB").textContent = questions[currentIndex].b;
}

document.addEventListener("DOMContentLoaded", function () {
    const gifContainer = document.querySelector(".background-gifs");
    const gifSources = ["assets/turtle-heart.gif"]; // Add more GIF URLs
    const numberOfGifs = 150; // Adjust how many GIFs you want

    for (let i = 0; i < numberOfGifs; i++) {
        let img = document.createElement("img");
        img.src = gifSources[Math.floor(Math.random() * gifSources.length)];
        img.className = "gif";
        
        // Randomize position while keeping them inside the viewport
        img.style.top = Math.random() * 90 + "%"; 
        img.style.left = Math.random() * 90 + "%";

        gifContainer.appendChild(img);
    }
});
document.getElementById("startQuiz").addEventListener("click", function () {
    document.getElementById("questionText").classList.add("hidden"); // Hide the <h1>
});

updateQuestion();
