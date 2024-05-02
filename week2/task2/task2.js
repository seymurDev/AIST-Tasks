const mailErr=document.getElementById('emailHelp')
const btn=document.getElementById('btn')
const passwordErr=document.getElementById('passwordHelp')
const mail=document.getElementById('mail')
const password=document.getElementById('pwd')
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
function validatePassword(pwd){
    if(pwd.length<8){
        return false
    }else{
        return true
    }
}
function changeMail(){
    var mailTxt=mail.value.trim()
    if(!validateEmail(mailTxt)){
        mailErr.style.color='red'
    }else{
        mailErr.style.color='#a3a3a3'
    }
}
function changePwd(){
    var pwdTxt=password.value.trim()
    if(!validatePassword(pwdTxt)){
        passwordErr.style.color='red'
    }else{
        passwordErr.style.color='#a3a3a3'
    }
    console.log(pwdTxt);
}
function send(e){
    e.preventDefault()
    var mailTxt=mail.value.trim()
    var pwdTxt=password.value.trim()
    if(validateEmail(mailTxt)&&validatePassword(pwdTxt)){
        alert("FORM SUCCESFULLY SUBMITED")
        password.value=''
        mail.value=''
    }
    
}
password.addEventListener('input',changePwd)
mail.addEventListener('input',changeMail)
btn.addEventListener('click',send)