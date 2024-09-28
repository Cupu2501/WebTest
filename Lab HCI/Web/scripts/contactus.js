function validasi(event){
    event.preventDefault()
    
    document.getElementById("nameError").textContent = ""
    document.getElementById("emailError").textContent = ""
    document.getElementById("countryError").textContent = ""
    document.getElementById("messageError").textContent = ""

    var isValid = true;

    var name = document.getElementById("name").value
    console.log(name)

    if(name.length < 6){
        isValid = false;
        document.getElementById("usernameError").textContent = "Name Length must be more than 5"
    }

    var email = document.getElementById("useremail").value
    console.log(email)

    if(!email.endsWith("@gmail.com")){
        isValid = false;
        document.getElementById("emailError").textContent = "Must be @gmail.com"
    }

    var country = document.getElementById("usercountry").value
    console.log(country)

    if(country!="Indonesia" && country!="Singapore" && country!="Malaysia"){
        isValid=false;
        
    }

    var message = document.getElementById("usermessage").value
    console.log(message)

    if(!message){
        isValid=false;
        document.getElementById("messageError").textContent="There is no message"
    }

    var agree = document.getElementById("useragree").checked;
    if(!agree){
        isValid = false;
        document.getElementById("confirmError").textContent = "User must agree"
    }

    if(isValid){
        document.getElementById("registerForm").submit();
    }
}