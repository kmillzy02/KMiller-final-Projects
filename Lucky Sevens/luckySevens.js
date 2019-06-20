//Katelyn Miller
//6-17-19
//updated:


function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function fellingLucky(){
	var dollar = Number(document.forms["luckySevens"]["startingBet"].value);
	var money = dollar;
	var die1;
	var die2;
	var dieSum;
	var maxMoney = 0;
	var rollNum = 0;
	var rollTotal = 0;
	if(money<=0){
		alert("Starting bet needs to be greater than $0");
	}
	else{
		while(money > 0){
			die1 = rollDice();
			die2 = rollDice();
			dieSum = die1 + die2;
			rollNum++;
			if(dieSum != 7){
				money--;	
			}
			else{
				money = money + 4;
				if(money > maxMoney){
					maxMoney = maxMoney + (money-maxMoney);
					rollTotal = rollNum;
				}	
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = dollar;
	document.getElementById("rollNum").innerText = rollNum;
	document.getElementById("max").innerText = maxMoney;
	document.getElementById("rollTotal").innerText = rollTotal;
	return false;
}