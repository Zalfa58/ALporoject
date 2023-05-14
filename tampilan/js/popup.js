let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup')
}

// popup setting

let Setting = document.getElementsById("setting");

function openSetting() {
    popup.classList.add('Setting')
}

function closeSetting() {
    popup.classList.remove('Setting')
}

// popup login

let Login = document.getElementById("login");

function openLogin() {
    popup.classList.add('Login');
}

function closeLogin() {
    popup.classList.remove('Login');
}

// popup switch account

let Switch = document.getElementById("Switch");

function openSwitch() {
    popup.classList.add('switch');
}

function closeSwitch() {
    popup.classList.remove('switch');
}

// popup creat post
let creatPost = document.getElementById("creatPost");

function openCreat() {
    popup.classList.add('creatPost');
}

function closeCreat() {
    popup.classList.remove('creatPost');
}