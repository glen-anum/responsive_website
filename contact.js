		
const form = document.getElementById('form');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const conPassword = document.getElementById('conPassword');

form.addEventListener('submit', (e)=> {
e.preventDefault();

checkInputs();
}); 

function checkInputs () {
const usernameVal = username.value.trim();                                 
const emailVal = email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal =password.value.trim();
const conPasswordVal =conPassword.value.trim();

if(usernameVal === ''){
setErrorFor(username, "Username is empty, fill.")
console.log('username is empty()')
return				
}else{
setSuccessFor(username) 

}

if(emailVal === ''){
setErrorFor(email, "Email is empty, fill.")		
return		
}else{
setSuccessFor(email) 
}

if(phoneVal === ''){
setErrorFor(phone, "Phone is empty, fill.")		
return		
console.log('Phone is empty()')
}else{
    setSuccessFor(phone)		
}

if(passwordVal === ''){
setErrorFor(password, "Password is empty, fill.");	
return			
}else{	
setSuccessFor(password) 
}

if(conPasswordVal === ''){
setErrorFor(conPassword, "Confirm Password is empty, fill.")	
return		
}else{				
setSuccessFor(conPassword) 				
}

let mdetail = {
"Username":usernameVal,
"Email": emailVal,
"Phone": phoneVal,
"Password":passwordVal				
}

display(mdetail);

}

function setErrorFor(input, message){
const formControl = input.parentElement;
const small = formControl.querySelector('small');
small.innerText = message;
formControl.className ='form-control error';
}

function setSuccessFor(input, message){
const formControl = input.parentElement;	
formControl.className ='form-control success';
}

function display(mdetail){			
let regex = /^[0][0-9]{9}$/;
let i,y = .0;
console.log(mdetail);
            
if(isNumber(phone.value.trim())){
    console.log('is number');
    i=1;
}else{
    i=0;
    setErrorFor(phone,"Not valid phone");
}

if(isEmail(email.value.trim())){
    console.log('is mail');
    y=1;
}else{
    y=0;
    setErrorFor(email,"Not valid Email");
}

console.log('value ' +i)

if(i===1 && y==1){
    alert(JSON.stringify(mdetail));
}					
}

function isNumber (numberi) {
let okNum = numberi;
console.log("okNum length"+ numberi.concat("").length);

var regex = /^[0][0-9]{9}$/;
return regex.test(numberi);
}

function isEmail (email) {							
var regex = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return regex.test(email);
}
