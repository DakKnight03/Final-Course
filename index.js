let point;
let name1, name2;
name1 = $("#name1").val()
name2 = $("#name2").val()
$("#name1").change(e=>{
	name1 = e.target.value;
})
$("#name2").change(e=>{
	name2 = e.target.value;
})
console.log(name1, name2)

let numPoint = 0;

$("#submit").click(function(e) {
	e.preventDefault();
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

		window.open("personality.html");
		localStorage.setItem('point', numPoint)
	})
	return numPoint;
	
}) 

console.log(numPoint);



let bonus = 0;

// personality test buttons

let button = document.getElementsByClassName("button");
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
		e.preventDefault();
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
	window.open("result.html");
})