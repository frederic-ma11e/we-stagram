const pwd = document.getElementsByClassName('pwd-input')[0];
// const loginButton = 
pwd.addEventListener('keydown',function(e){
    const idValue = document.getElementsByClassName('id-input')[0].value;
    const pwdValue = document.getElementsByClassName('pwd-input')[0].value;
    if (idValue.length >= 1 && pwdValue.length >= 1) {
        document.getElementsByClassName('login-button')[0].style.backgroundColor = '#3896f0';
    }
});
// document.getElementsByClassName("login-button").style.backgroundColor = 'red';