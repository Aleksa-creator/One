var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

var body = document.getElementsByTagName("body")[0];

btn.onclick = function() {
    modal.style.display = "block";
    body.style.overflow = "hidden";
}


span.onclick = function() {
    modal.style.display = "none";
    body.style.overflow = "auto";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
}

