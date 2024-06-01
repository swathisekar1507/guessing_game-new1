//-----NUMBER GUESSING GAME------
const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attemps=0;
let guess;
let running=true;
while(running){
    guess=window.prompt(`guess number between ${minNum}-${maxNum}`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert("please! Enter the  valid number");
    
    }
    else if(guess<minNum || guess>maxNum){
        window.alert("please! Enter a valid number");
    }
    else{
        attemps++;
        if(guess<answer){
            window.alert("TOO LOW!TRY AGAIN");
        }
        else if(guess>answer){
            window.alert("TOO HIGH!TRY AGAIN");
        }
        else{
            window.alert(`CORRECT!YOUR ENTERED NUMBER IS ${guess} and the number of attemps are ${attemps}`);
            running=false;
        }
    }
}