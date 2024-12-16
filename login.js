const namee = document.querySelector('.case3')
const passward = document.querySelector('.case2')
const email = document.querySelector('.case1')
const signUp = document.querySelector('.btn')
const signUp1 = document.querySelector('.foot .sign-up a')
const signUp2 = document.querySelector('.foot .forgot a')
const login = document.querySelector('.btn.one')
const setUP = document.querySelector('.btn.setup')
const header = document.querySelector('.container h1')
const para = document.querySelector('.container p')
const content = document.querySelector('.container .input')
const pf = document.querySelector('.input2 .foot')
const box = document.querySelectorAll('.go ')
const popup = document.querySelector('.popup')
const popupCon = document.querySelector('.popup .pop')
const popupP = document.querySelectorAll('.popup b p')

// items are execuited

window.addEventListener('DOMContentLoaded', loade)
signUp.addEventListener('click', confirmDetails)
login.addEventListener('click', signin)
signUp1.addEventListener('click', sineup)
signUp2.addEventListener('click', resete)
setUP.addEventListener('click', checkEmail)
popupCon.addEventListener('cilck', nextpage)


// functions are decleared

// going back into the sign up page
function sineup(){
    
    signUp.style.display = 'block';
    login.style.display ='none'
     box.forEach(bo => {
    bo.style.display = 'block';
        
     })
    pf.style.display = 'none';
    passward.children[1].value = '';
    passward.children[1].type = 'text';

    namee.children[1].value = '';
    namee.style.display = 'block';
    email.children[1].value = '';
    
    let correct1 = set21 = JSON.parse(localStorage.getItem('passward'));
    let correct2 = set21 = JSON.parse(localStorage.getItem('email'));
    let correct3 = set21 = JSON.parse(localStorage.getItem('name'));

    correct1.splice(0,1)
    correct2.splice(0,1)
    correct3.splice(0,1)
       localStorage.setItem('passward' , JSON.stringify(correct1))
       localStorage.setItem('email' , JSON.stringify(correct2))
       localStorage.setItem('name' , JSON.stringify(correct3))
}

// confirm wether the email name and passward is inputed correctly
function confirmDetails(){
    
   if(namee.children[1].value == '' && passward.children[1].value == '' && email.children[1].value ==''){
        email.children[2].innerHTML = 'requesting of email';
        passward.children[2].innerHTML = 'requesting of passward or charater less than 8';
        namee.children[2].innerHTML = 'requesting of name';
   }else if(namee.children[1].value == '' && passward.children[1].value == '' || passward.children[1].value.length < 8){

    namee.children[2].innerHTML = 'requesting of name';
        passward.children[2].innerHTML ='requesting of passward or charater less than 8';
   }else if(passward.children[1].value == '' || passward.children[1].value.length < 8 && email.children[1].value ==''){

    email.children[2].innerHTML = 'requesting of email';
    passward.children[2].innerHTML = 'requesting of passward or charater less than 8';
   }else if(namee.children[1].value == '' && email.children[1].value ==''){
    email.children[2].innerHTML = 'requesting of email';
    namee.children[2].innerHTML = 'requesting of name';

   }else if(namee.children[1].value == ''){
    namee.children[2].innerHTML = 'requesting of name';

   }else if(passward.children[1].value == '' || passward.children[1].value.length < 8){
    passward.children[2].innerHTML = 'requesting of passward or charater less than 8'
}else if(email.children[1].value =='' || email.children[1].value.indexOf('@') == -1){
    email.children[2].innerHTML = 'requesting of correct email';

}else{
    submit()
}

setTimeout(() => {
    email.children[2].innerHTML = '';
        passward.children[2].innerHTML = '';
        namee.children[2].innerHTML = '';
}, 2000);
}

// to save details and log into now page
function submit(){
    if(passward.children[1].value == ''){

    }else{
        savedetail();
        loginPage()
    }
}

// the login page
function loginPage(){


       signUp.style.display = 'none';
       setUP.style.display = 'none';
       login.style.display ='block'
        box.forEach(bo => {
       bo.style.display = 'none';
           
        })
       pf.style.display = 'flex';
       header.innerHTML = 'Login in';
       passward.children[1].value = '';
       passward.children[1].type = 'password';
       namee.children[1].value = '';
       namee.style.display = 'none';
       email.children[1].value = '';   
    }

// saved details
function savedetail(){
    let set1;
    let set2;
    let set3;

    if(localStorage.getItem('email') == null){
        set1 = []
    }else{
        set1 = JSON.parse(localStorage.getItem('email'))
    }
    set1.push(email.children[1].value)
    localStorage.setItem('email', JSON.stringify(set1))


    if(localStorage.getItem('passward') == null){
        set2 = []
    }else{
        set2 = JSON.parse(localStorage.getItem('passward'))
    }
    set2.push(passward.children[1].value)
    localStorage.setItem('passward', JSON.stringify(set2))

    
    if(localStorage.getItem('name') == null){
        set3 = []
    }else{
        set3 = JSON.parse(localStorage.getItem('name'))
    }
    set3.push(namee.children[1].value)
    para.innerHTML = namee.children[1].value;

    localStorage.setItem('name', JSON.stringify(set3))
}


// checking to login to the site
function signin(){
    let set1;
    let set2;

    if(localStorage.getItem('email') == null){
        set1 = []
    }else{
        set1 = JSON.parse(localStorage.getItem('email'))
    }


    if(localStorage.getItem('passward') == null){
        set2 = []
    }else{
        set2 = JSON.parse(localStorage.getItem('passward'))
    }


    if(passward.children[1].value == set2[0] && email.children[1].value == set1[0]){
       popup.classList.add('open')
       popup.style.display = 'flex';
       popupCon.style.display = 'flex';
       content.classList.add('back')
       popupP.textContent = 'login Successful'

    }else{
        passward.children[2].style.display = 'block'
        passward.children[2].innerHTML = 'no credidential or incorrect credidential'
        setTimeout(() => {
        passward.children[2].innerHTML = ''
            
        }, 2000);
    }

}


// to recover lost details
function resete(e){
    passward.style.display = 'none';
    login.style.display = ' none';
    setUP.style.display = ' block';
    header.innerHTML = 'Verify your Email';
    signUp1.style.display = 'none'
    signUp2.style.display = 'none'

}


// checking of email and setting of passward
function checkEmail(){
    if(email.style.display == 'none'){
     let set21;
     if(localStorage.getItem('passward') == null){
        set21 = []
     }else{
        set21 = JSON.parse(localStorage.getItem('passward'))
     }
       set21.splice(0,1)
       localStorage.setItem('passward' , JSON.stringify(set21))
       set21.push(passward.children[1].value)
       localStorage.setItem('passward' , JSON.stringify(set21))

       loginPage()
       setUP.style.display = 'none';
       email.style.display = 'block'
       passward.children[1].value = ''
       email.children[1].value = ''
       namee.children[1].value = ''
       let set = JSON.parse(localStorage.getItem('name'))
       para.innerHTML = set[0]
       header.innerHTML = 'log in';

       popup.classList.add('open')
       popup.style.display = 'flex';
       content.classList.add('back')
       popupP.innerHTML = 'passward reset Successfuly'
       popupCon.style.display = 'none'

       setTimeout(() => {
        popup.classList.remove('open')
        popup.style.display = 'none';
        content.classList.remove('back')
        popupP.innerHTML = ''
       }, 3000);

    }else{

    
   
       let  set12 = JSON.parse(localStorage.getItem('email'))
    

    if(email.children[1].value == set12[0]){
    passward.style.display = 'block';
    email.style.display = 'none'
    header.innerText = 'Create a new Passward';


    }else{
        email.children[2].innerHTML = 'This email is not found'

        setTimeout(() => {
            email.children[2].innerHTML = ''
        }, 2000);
    }
    }
}


// reloding of page in and if not details if found
function loade(){

 if(localStorage.getItem('passward') == '[]' || localStorage.getItem('passward') == null){        
        
}else{

    loginPage()
    let set = JSON.parse(localStorage.getItem('name'))
    para.innerHTML = set[0]
    header.innerHTML = 'welcome back';
}

    
}

// signing into the site
function nextpage(){
    popup.classList.remove('open')
       popup.style.display = 'none';
       content.classList.remove('back')
       popupP.innerHTML = ''
}

