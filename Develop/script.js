
var upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbol= ["!","@","#","$","%","^","&","*","(",")","_", "-", "+", ",", "=", "~","`","{","}","[","]",":",";","'","|","<",">","?","/"];
var number= ["0","1","2","3","4","5","6","7","8","9"];

var enter;
var confirmNumber;
var confirmsymbol;
var confirmUpper;
var confirmLower;

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    enter = parseInt(prompt("How many characters do you want your password? pick between 8 and 128"));
    if (!enter) {
        alert("This needs a value");
    } 
    
    else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You have to  pick between 8 and 128"));
    } 
    
    else {
 
        confirmNumber = confirm("Do you want a numbers?");
        confirmsymbol = confirm("Do you want a special characters?");
        confirmUpper = confirm("Do you want a  Uppercase letters?");
        confirmLower = confirm("Do you want a Lowercase letters?");
    };
        
    if (confirmsymbol && confirmNumber && confirmUpper && confirmLower) {

        choices = symbol.concat(number, upper, lower);
    }
    
    else if (confirmsymbol && confirmNumber && confirmUpper) {
        choices = symbol.concat(number, upper);
    }

    else if (confirmsymbol && confirmNumber && confirmLower) {
        choices = symbol.concat(number, lower);
    }

    else if (confirmsymbol && confirmUpper && confirmLower) {
        choices = symbol.concat(upper, lower);
    }

    else if (confirmNumber && confirmLower && confirmUpper) {
        choices = number.concat(upper, lower);
    }
   
    else if (confirmsymbol && confirmNumber) {
        choices = symbol.concat(number);

    } 
    
    else if (confirmsymbol && confirmLower) {
        choices = symbol.concat(lower);

    } 

     else if (confirmLower && confirmNumber) {
        choices = lower.concat(number);

    }

     else if (confirmsymbol && confirmUpper) {
        choices = symbol.concat(upper);
    }

     else if (confirmLower && confirmUpper) {
        choices = lower.concat(upper);

    }
    
    else if (confirmNumber && confirmUpper) {
        choices = number.concat(upper);
    }
    
    else if (confirmsymbol) {
        choices = symbol;
    }

    else if (confirmNumber) {
        choices = number;
    }

    else if (confirmLower) {
        choices = lower;
    }
    var password = []; 

    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
   
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
var copy = document.querySelector("#copy");


function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}

//sources : https://www.youtube.com/watch?v=9sT03jEwcaw&feature=youtu.be
// : https://www.youtube.com/watch?v=9Sr0YcBfwnQ  https://www.youtube.com/watch?v=iKo9pDKKHnc&t=1091s
