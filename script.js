let navlinks = document.getElementById('navlinks');

function openmenu() {
    navlinks.style.display = "block"
    navlinks.style.right = "0";
    
}

function hidemenu() {
    navlinks.style.right = "-200px";
    navlinks.style.display = "none";
}