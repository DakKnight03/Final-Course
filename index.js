let point;
let name1, name2, age;
$("#loading").hide();
$("#name1").change(e => {
	name1 = e.target.value;
	$("#loading").hide();

})
$("#name2").change(e => {
	name2 = e.target.value;
	$("#loading").hide();

})
$("#age").change(e => {
	age = e.target.value;
	$("#loading").hide();

})

console.log(name1, name2, age)
let numPoint = 0;

$("#button").click(function(e) {	
	e.preventDefault();
	$("#loading").show();

	if(name1 == undefined){
		$("#name1").css("borderColor", "red")
	} else if (name2 == undefined){
		$("#name2").css("borderColor", "red")

	} else if (age == undefined ){
		$("#age").css("borderColor", "red")

	} else {
		console.log("a")
		$.ajax({
		"async": true,
		"crossDomain" : true,
		"url" : `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": "cedbb6e127msh6c3f85c77dc22c0p153d51jsn608d2ca695b6"
		}
		}).then((res) => {
			console.log(res)
			point = res.percentage;
			console.log(typeof point);
			numPoint = Number(point);
			console.log(numPoint);
			if (numPoint > 40) {
				numPoint = 40;
				console.log(numPoint);
			}
			sessionStorage.setItem('point', numPoint)
			window.location.href = "personality.html";
			$("#loading").hide();
		});	
	
	
	
	}
	
	
	
	
}) 

console.log(numPoint);



let bonus = 0;

// personality test buttons

let button = document.getElementsByClassName("button");
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
		e.preventDefault();
		e.target.style.color = "white";
		e.target.style.backgroundColor = "lightcoral";
		e.target.style.borderColor = "lightcoral";
        let getAtt = e.target.getAttribute("att");
		console.log(getAtt);
		
		let parent = e.target.parentNode;
		let buttons = parent.getElementsByTagName("button");
		for (i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}


        if (getAtt == "good") {
			bonus += 6;
        } else if (getAtt == "avg") {
			bonus += 3;
		}
		return bonus;
	})
}

$("#finish").click(function(e) {
	e.preventDefault();
	$("#loading").show();
	console.log(bonus);
	console.log(localStorage.getItem('point'));
	sessionStorage.setItem("result", (bonus + Number(localStorage.getItem('point'))));
	
	setTimeout(function() {
	$("#loading").hide();
	window.location.href = "result.html";
	}, 1500);	
})

