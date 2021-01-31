var hexagons = document.getElementsByClassName("hexagon");
var maxDelay = 2;
var minLength = 3;
var maxLength = 6;

for (var i = 0; i < hexagons.length; i++) {
	var randomDelay = Math.random() * maxDelay;
	hexagons[i].style.animationDelay = randomDelay + "s";

	var randomLength = Math.random() * (maxLength - minLength);
	randomLength += minLength;
	hexagons[i].style.animationDuration = randomLength + "s";
}