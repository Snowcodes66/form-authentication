'use strict'
const email=document.querySelector('.email')
const password=document.querySelector('.password')
const conPass=document.querySelector('.con-pass')
const btnSub=document.querySelector('.btn-sub')
const displaySignSms=document.querySelector('.dis-sign-sms')
const hidden=document.querySelector('.hidden')
const visible=document.querySelector('.visible')
const formDiv=document.querySelector('.form-div')
const person=document.querySelector('.name')
const username=document.querySelector('.username')
const errorDisplay=document.querySelector('.error')



const setError=function (element, message) {
    const inputControl=element.parentElement;
    console.log(inputControl)
    const errorDisplay=inputControl.querySelector('.error')

    errorDisplay.innerText=message
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
 
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setSuccess=function(element){
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error')

    errorDisplay.innerText=''

    inputControl.classList.add('success')
    inputControl.classList.remove('error')
  
}


const validateInput=function () {
    const trimEmail=email.value.toLowerCase().trim();
    const trimPassword=password.value.toLowerCase().trim();
    console.log(trimPassword.length)
    const trimConPass=conPass.value.trim();
    const trimUsername=username.value.trim();
    const trimName=person.value.trim();

    if (trimUsername === '') {
        setError(username,'please fill in the provided space')
    }else{
        setSuccess(username)
    }

    if (trimEmail === '') {
        setError(email,'please fill the provided space')
    }else if(!isValidEmail(trimEmail)){
        setError(email,'please provide a valid email')
    }
    else{
        setSuccess(email)
    }

    if (trimConPass === '' ) {
        setError(conPass,'please fill the provided space')
    }else if(trimConPass !== trimPassword){
        setError(conPass,'your password does not match')
    }
    else{
        setSuccess(conPass)
    }

    if (trimPassword === '') {
        setError(password,'please fill the provided space')
    }else if(trimPassword.length < 8){
        setError(password,'your password is too short')
    }
    else{
        setSuccess(password)
    }

    if (trimName === '') {
        setError(person,'please fill the provided space')
    }
    else{
        setSuccess(person)
    }



};



btnSub.addEventListener('click', function (e) {
    e.preventDefault()
    validateInput()
})

