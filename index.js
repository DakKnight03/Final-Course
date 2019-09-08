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

	} else if (age == undefined || isNaN(age)){
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
		if (numPoint > 20) {
			numPoint = 20;
			console.log(numPoint);
		}
	});	
	setTimeout(() => {
		window.location.href = "personality.html";
		$("#loading").hide();
	}, 1500)
	
	localStorage.setItem('point', numPoint)
	return numPoint;
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
			bonus += 8;
        } else if (getAtt == "avg") {
			bonus += 5;
		}
		return bonus;
	})
}

$("#finish").click(function() {
	console.log(bonus);
	console.log(localStorage.getItem('point'));
	localStorage.setItem("result", (bonus + Number(localStorage.getItem('point'))));
	window.location.href = "result.html";
})

