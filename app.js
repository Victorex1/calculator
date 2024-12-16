const menue = document.querySelector('.menue')
const profile = document.querySelector('.profile')
const body = document.querySelector('.container')
const details = document.querySelector('.details')
const logout = document.querySelector('.logout')
const closee = document.querySelector('.group')
const heade = document.querySelector('.profile h2')
const pro1 = document.querySelector('.details .circle p')
const proN = document.querySelector('.details .name')
const proE = document.querySelector('.details .email')
const proON = document.querySelector('.details .online')


window.addEventListener('DOMContentLoaded',loginSite)
logout.addEventListener('click', out)
closee.addEventListener('click', unview)
menue.addEventListener('click', show)

// next page

function out(){
    profile.classList.remove('show') 
    body.classList.remove('show2')
    heade.innerHTML = 'My Profile'
     
    details.style.display = 'flex'
    logout.innerHTML = 'sign our'
    closee.style.display = 'block'
}


// showing profile

function show(){
    profile.classList.add('show')
    body.classList.add('show2')
}

function unview(){
    profile.classList.remove('show')
    body.classList.remove('show2')
}

// checking login details

function loginSite(){
    if(localStorage.getItem('passward') == '[]' || localStorage.getItem('passward') == null){
        profile.classList.add('show') 
        body.classList.add('show2')
        heade.innerHTML = 'You dont have an account with us'
        details.style.display = 'none'
        logout.innerHTML = 'sign in'
        closee.style.display = 'none'
    }
}

console.log(localStorage.getItem('name')[2].toUpperCase())

let profile1;
let profile2;


profile1 = JSON.parse(localStorage.getItem('name'));
 profile2 = JSON.parse(localStorage.getItem('email'));

menue.innerHTML = localStorage.getItem('name')[2].toUpperCase();
pro1.innerHTML = localStorage.getItem('name')[2].toUpperCase();
proN.innerHTML = profile1;
proE.innerHTML = profile2;

if(navigator.onLine){
    proON.innerHTML = 'online'
}else{
    proN.innerHTML = 'offline'
}