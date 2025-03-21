let nameError = document.getElementById('name-error');
let contactError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let msgError = document.getElementById('msg-error');
let submitError = document.getElementById('submit-error');
let submit = document.getElementById('sub')

validateName = ()=>{
    let name = document.getElementById('contact-name').value ;
    if(name.length ==0){
        nameError.innerHTML ="*Name is required";
        return false;
    };
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ="*type your full name";
        return false;
    }
    else{
        nameError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    };
};
validateNo = ()=>{
    let phone = document.getElementById("phone-name").value;
    if(phone.length == 0){
        contactError.innerHTML ='*contact No is required';
        return false;
    }
    if(phone.length !== 10){
        contactError.innerHTML ='*contact no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        contactError.innerHTML ='*only digits please'
        return false;
    }
    else{
        contactError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }
}
validateEmail = ()=>{
    let email = document.getElementById("email-name").value;
    if(email.length ==0){
        emailError.innerHTML ='*email is required';
        return false;
    };
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/)){
        emailError.innerHTML ='*invalid email';
        return false;
    }
    else{
        emailError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    };
};
validateMsg = ()=>{
    let msg = document.getElementById("msg-name").value;
    let required = 50;
    let remaining = required-msg.length;

    if(remaining > 0){
        msgError.innerHTML= remaining + ' more characters is required';
        return false;
    }
    
    else{
        msgError.innerHTML ='<i class="fa-solid fa-circle-check"></i>';
        return true;
    };
};
function validateform(){
    if(!validateName()||!validateNo()||!validateEmail()||!validateMsg()){
        submitError.style.display="block";
       submitError.innerHTML="*please fix the error and try again";
       setTimeout(function(){submitError.style.display="none"},4000);
       return false;
    }
}
