

// Declaring variables
    const name = document.getElementById('name');
    const form = document.getElementById('ticket');
    const type = document.getElementById('type');
    const date = document.getElementById('date');
    const number = document.getElementById('number');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const conf = document.getElementById('confirm');
    const submit = document.getElementById('submit');
    let errormsg = document.getElementById('error');
    let text;
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let letters =/^[a-zA-Z ]{2,30}$/;
    let passwordFormat=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

// Name Validation
    function nameValid(){
        if(name.value.match(letters)) 
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            name.style.border = "1.5px solid #58D68D";
            return true;
            
        }
        else 
        {
            text = "Please enter a valid name.";
            name.focus();
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            name.style.border = "1.5px solid #fe8b8e";
            return false;
        }
        
    }
       
//Ticket Type Validation
    function typeValid(){
        if(type.value == "None")
        {
            type.focus();
            text = "Please select a ticket type.";
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            type.style.border = "1.5px solid #fe8b8e";
            return false;
        }
        else
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            type.style.border = "1.5px solid #58D68D";
            return true;
        }
    }

//No. of tickets Validation
    function ticketValid(){
        if(number.value <=0 || number.value == null) 
        {
            number.focus();
            text = "Please enter a valid number of tickets.";
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            number.style.border = "1.5px solid #fe8b8e";
            return false;
        }
        else
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            number.style.border = "1.5px solid #58D68D";
            return true;
        }
    }

//Email Validation
    function emailValid(){
        if(!email.value.match(mailFormat) || email.value.length == 0) 
        {
            email.focus();
            text = "Please enter a valid email address.";
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            email.style.border = "1.5px solid #fe8b8e";
            return false;
        }
        else 
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            email.style.border = "1.5px solid #58D68D";
            return true;
        }
    }
    
    
//Password Validation
     function passwordValid(){
        if(password.value.match(passwordFormat))
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            password.style.border = "1.5px solid #58D68D";
            return true;
        }
        else
        {
            password.focus();
            text = "Your password must be 7-15 characters long, and contain atleast 1 numeric digit and special character.";
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            password.style.border = "1.5px solid #fe8b8e";
            return false;
        }
    }
    

//Confirm Password
    function confirmPass(){
        if(conf.value != password.value)
        {
            conf.focus();
            text = "Invalid password confirmation.";
            errormsg.innerHTML = text;
            errormsg.style.padding = "10px";
            conf.style.border = "1.5px solid #fe8b8e";
            return false;
        }
        else
        {
            errormsg.style.padding = "0";
            text = "";
            errormsg.innerHTML="";
            conf.style.border = "1.5px solid #58D68D";
            return true;
        }
       
    }




