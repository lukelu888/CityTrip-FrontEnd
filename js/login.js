document.addEventListener("DOMContentLoaded", function() {
    var form = document.forms[0];
    console.log(form.username.value);
    form.onsubmit = function(event) {
        if(form.username.value=="admin"&&form.password.value=="12345"){
            alert("Welcome to CityTrip website!");
            return true;
        }else{
            alert("Wrong username or password! Try again!");
            return false;
        }
    }
});   