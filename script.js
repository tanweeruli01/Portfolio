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

// google sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqgaG0LOiWPTuYkQm-3BtnkJv1EtmvfHQ0dxJ2Y794KRzi5JvhC6yljL0VP7-utFy8/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your message has successfully been sent to my email!"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

