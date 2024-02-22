var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); //experiences
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab"); //skills
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); 
}

var sideMenu = document.getElementById("sideMenu")

function openMenu(){
    sideMenu.style.right = "0"; //this will open the menu bar
}

function closeMenu(){
    sideMenu.style.right = "-200px"; //this will close the menu bar
}