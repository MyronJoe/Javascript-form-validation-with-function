let header = document.getElementById('header')
let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirm-password')


let username_error = document.getElementById('username_error')
let email_error = document.getElementById('email_error')
let password_error = document.getElementById('password_error')
let confirm_pass_error = document.getElementById('confirm_pass_error')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (checkEmpty(username, 'username is required', username_error)) {
        if (checkLength(username, 'username is too short', username_error, 5)) {
            if (checkEmpty(email, 'email is required', email_error)) {
                if (validEmail(email, 'email is invalid', email_error)) {
                    if (checkEmpty(password, 'password is required', password_error)) {
                        if (checkLength(password, 'password is too short', password_error, 7)) {
                            if (passMatch(confirmPassword, password, 'password does not match', confirm_pass_error)) {
                                welcome()
                            }
                        }
                    }
                }
            }
        }
    }

})


function checkEmpty(el, msg, elerror) {
    if (el == null || el.value == "") {
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

function validEmail(el, msg, elerror) {
    if ((email.value).indexOf('@') == -1) {
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

function checkLength(el, msg, elerror, length) {
    if ((el.value).length < length) {
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

function passMatch(el1, el2, msg, elerror) {
    
    if (el1.value !== el2.value) {
        el1.classList.remove('success-border')
        el1.classList.add('error-border')
        elerror.innerHTML = msg
        return false
    } else {
        el1.classList.add('success-border')
        elerror.innerHTML = ''
    }
    return true
}

function welcome() {
    let user = username.value
    header.innerHTML = `You are welcome ${user}`
}