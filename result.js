let result = localStorage.getItem('result');
const resultEl = document.getElementById('result');
resultEl.textContent = result + '%';

let limit = document.getElementById("limit");

let conclusion = document.getElementById("conclusion");

if (Number(result) < 30) {
    conclusion.textContent = "It seems like you and your partner is not suitable to be in a romantic relationship. Yet. You two can definitely be good friends though. But don't let this little test decide what is best for you. You can read about how to express your love in an article that we have prepared for you. We wish you the best and hope that you will find the love of your life.";
} else if (Number(result) < 65) {
    conclusion.textContent = "Well, it seems like you two are in good terms! Even though there might be some questionable things about this relationship, but if you read the article about expressing your love that we have prepared for you, we believe that you can really improve this relationship further. Good luck!";
    limit.style.color = "lightgray";
    limit.addEventListener("click", function(e) {
    alert("Your compatibility with your partner has to be more than 90% to open this page.")
    });

} else if (Number(result) < 90) {
    conclusion.textContent = "What a blooming relationship you have! You two are really compatible with each other and will make a lovely couple! If you are planning to take him/her out on a date, we have prepared an article that will show the best places for a date. Good luck out there!";
    
    // lock hotel review page if not more than 90

    
} else {
    conclusion.textContent = "What a match made in heaven! You two are like two magnets pulling each other closer and can not be separated! If you two are planning to have a little honey moon somewhere (if you are old enough of course), we have prepared an article listing the best hotels for your relaxing and romantic honey moon! Or, you can just read the article listing the best places for a date that we have included to take him/her out for a date. We wish you the best with this relationship!!"
}

let retake = document.getElementById("retake");
retake.addEventListener("click", function(e) {
    localStorage.clear();
});

$(window).unload(function() {
    localStorage.clear();
});