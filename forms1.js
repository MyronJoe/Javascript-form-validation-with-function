var form = document.getElementById('form')
var username = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('password')
var confirm_password = document.getElementById('confirm-password')


var username_error = document.getElementById('username_error')
var email_error = document.getElementById('email_error')
var password_error = document.getElementById('password_error')
var confirm_pass_error = document.getElementById('confirm_pass_error')

form.addEventListener('submit', function(e){
    e.preventDefault()

    if(isEmpty(username, 'username cant be empty', username_error)){ 
        if(checklength(username, 'username should be > 5', username_error, 6)){
            if(isEmpty(email, 'email cant be empty', email_error)){
                if(isEmpty(password, 'password cant be empty', password_error)){
                    if(checklength(password, 'username should be > 7', password_error, 8)){
                        if(passmatch(password, confirm_password, 'password does not match', confirm_pass_error)){
                            return true
                        }
                    }
                }
            }
        }
    }
})

function isEmpty(el, msg, elerror){
    if(el==null | el.value==""){
        el.classList.remove('success-border')
        el.classList.add('error-border')
        elerror.innerHTML = msg
        return false
    }else{
        el.classList.add('success-border')
        elerror.innerHTML = ''
    }
    return true
}

function checklength(el, msg, elerror, length){
    if((el.value).length < length){
        el.classList.remove('success-border')
        el.classList.add('error-border')
        elerror.innerHTML = msg
        return false
    }else{
        el.classList.add('success-border')
        elerror.innerHTML = ''
    }
    return true
}

function passmatch(el1, el2, msg, elerror){
    if(el1.value !== el2.value){
        el2.classList.add('error-border')
        elerror.innerHTML = msg
        return false
    }else{
        el2.classList.add('success-border')
        elerror.innerHTML = ''
    }
    return true
}