var numberFun = document.forms["numberFun"];  // get all vars by id from html file 
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {  // called to require validation from form on user's end 

    numberFun.className = "needs-validation";       //changes class to require validation

    if (!numberFun.checkValidity()) {
        numberFun.className = "was-validated";
        return false;
    }

    var operand1 = parseInt(num1.value, 10);        //convert user input into int from strings 
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;           //assign vars from HTML to results based on user input 
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";            //linked to stuff in HTML file line 40
    submitButton.innerText = "Recalculate";     //change innertext to recalc

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}

function resetView() {              // change class back to needing validation and results none when reset button is called
    numberFun.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";       //change button back to default 
    num1.focus();
}