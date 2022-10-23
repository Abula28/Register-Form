let signInBtn = document.querySelector(".sign-In-btn");
let signUpBtn = document.querySelector(".sign-Up-btn");
let styleElem = document.head.appendChild(document.createElement("style"));
let logIn = document.querySelector("#login");
let signUp = document.querySelector("#signup");
let orIn = document.querySelector(".or-in");
let orUp = document.querySelector(".or-up");

signInBtn.addEventListener('click', function(){
    styleElem.innerHTML = ".sign-Up-btn:after {width: 0%; transition: .5s;} .sign-In-btn:after{width: 100%; transition: .5s;}";
    signInBtn.style.color = "#5957BA"
    signUpBtn.style.color = "#797979"
    logIn.style.display = "flex";
    logIn.style.transition = ".5s";
    signUp.style.transition = ".5s"
    signUp.style.display = "none";
    orIn.style.display = "flex";
    orUp.style.display = "none";
})

signUpBtn.addEventListener('click', function(){
    styleElem.innerHTML = ".sign-Up-btn:after {width: 100%; transition: .5s;} .sign-In-btn:after{width: 0%; transition: .5s;}";
    signInBtn.style.color = "#797979"
    signUpBtn.style.color = "#5957BA"
    logIn.style.display = "none";
    logIn.style.transition = ".5s";
    signUp.style.transition = ".5s"
    signUp.style.display = "flex";
    orIn.style.display = "none";
    orUp.style.display = "flex";
})

