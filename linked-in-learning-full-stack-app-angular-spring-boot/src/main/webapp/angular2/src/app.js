function that() {
	var thing = document.getElementById('bar').value;
    document.getElementById('word').innerHTML = "<h1>" + thing + "</h1>";

    return thing;
}