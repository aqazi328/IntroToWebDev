var gameform = document.forms["gameform"];
var amount = document.getElementById("amount");

function validate(){

    gameform.className = "game";   

    if (!gameform.checkValidity()) {
        gameform.className = "was-validated";
        return false;
    }
    
    console.log("validating");
    var money = parseInt(amount.value)
    if ( money > 0){        //check if there's money > 0 to START
    var dice_counter = 0;
    var highest = 0;
    var rollcount = 0;
        while (money>0){ 
            dice_result = rollDice();
            dice_counter++;
            if (dice_result == 7){
                console.log("nice!");
                money = money + 4;
            }
            else{
                console.log("no!");
                money = money - 1;
            }
            if (money > highest){highest = money; rollcount = dice_counter;}
        }
        console.log("you ran out!");
        console.log("you rolled a total of: " + dice_counter + " times!");
        console.log("the highest amount you had was: " + highest + " dolllars!");
        console.log("your roll count at highest was: " + rollcount);
    }
    return false;
}

function rollDice(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    return randomNumber1 + randomNumber2;
}
