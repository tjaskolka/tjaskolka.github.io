function callClose() {


    
    window.onload = function() {
    document.getElementById('alert').style.display = "block";
}

let closebutton = document.getElementById("close");

closebutton.addEventListener("click", function() {
    this.parentElement.style.display = 'none';

});
}