var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random_btn = document.getElementById("random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ");";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	color1.setAttribute("value",getRandomColor());
	color2.setAttribute("value",getRandomColor());
	setGradient();
}


function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }



random_btn.addEventListener("click", setRandomGradient);


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

