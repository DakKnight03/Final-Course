let result = localStorage.getItem('result');
const resultEl = document.getElementById('result');
resultEl.textContent = result + '%';

let limit = document.getElementById("limit");

if (Number(result) < 50) {
    console.log("bad")
} else if (Number(result) < 90) {
    console.log("pretty good")
} else {
    console.log("great")
}

if (Number(result) < 90) {
    limit.style.color = "lightgray";
    limit.addEventListener("click", function(e) {
        alert("Your compatibility with your partner has to be more than 90% to open this page.");
    })
}

let retake = document.getElementById("retake");
retake.addEventListener("click", function(e) {
    localStorage.clear();
})
