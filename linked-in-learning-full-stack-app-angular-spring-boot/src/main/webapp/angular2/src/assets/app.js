function that() {
	var thing = document.getElementById('bar').value;
    document.getElementById('word').innerHTML = "<h1>" + thing + "</h1>";

    return thing;
}

function switchOut() {
	var button = document.getElementById("submit-room");
	button.style.transition = "width 3s";	
}
function switchIn() {
	var button = document.getElementById("submit-room");
	button.style.transition = "width .5s";	
}