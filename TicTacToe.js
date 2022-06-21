// JavaScript source code
counter = 0;
var xes = " ";
var ohs = " ";
var winners = ["123", "147", "456", "789", "159", "753", "258", "369", "357"];
var btn1 = document.getElementById("1");
var btn2 = document.getElementById("2");
var btn3 = document.getElementById("3");
var btn4 = document.getElementById("4");
var btn5 = document.getElementById("5");
var btn6 = document.getElementById("6");
var btn7 = document.getElementById("7");
var btn8 = document.getElementById("8");
var btn9 = document.getElementById("9");
var title = document.getElementById("header");



function appnd(id) {
	if (counter % 2 == 0) {
		ohs += id;
	} else { xes += id; }

	counter++;

	if (counter >= 5) {
		checkWin(ohs);
		checkWin(xes);
	}
	if (counter == 9) {
		title.innerHTML = "No Winner"
	}
}

// only use once >= 6 choices are selected
// AKA run this after player 1s 3rd turn
function checkWin(data){
	
	// Loops through every possible winning combination
	// and compares the characters with the current input

	var count = 0;
	for (w of winners) {
		for (var i = 0; i < w.length; i++) {
			for (var j = 0; j < data.length; j++) {
				if (data.charAt(j) == w.charAt(i)) {
					// match found
					count++;
					i++;
				}	
			}
			if (count == 3) {
				winner();
			}
			count = 0;
		}
	}
}

// should've made this a function and used an array of buttons,
// but I have a lot of homework sorry
function disableBtn(btnNum) {
	if (btnNum == 1) { 
		if (counter % 2) { 
			btn1.innerHTML = "O";
			} else { btn1.innerHTML = "X"; }
		document.getElementById('1').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 2) { 
		if (counter % 2) { 
			btn2.innerHTML = "O";
			} else { btn2.innerHTML = "X"; }
		document.getElementById('2').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 3) { 
		if (counter % 2) { 
			btn3.innerHTML = "O";
			} else { btn3.innerHTML = "X"; }
		document.getElementById('3').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 4) { 
		if (counter % 2) { 
			btn4.innerHTML = "O";
			} else { btn4.innerHTML = "X"; }
		document.getElementById('4').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 5) { 
		if (counter % 2) { 
			btn5.innerHTML = "O";
			} else { btn5.innerHTML = "X"; }
		document.getElementById('5').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 6) { 
		if (counter % 2) { 
			btn6.innerHTML = "O";
			} else { btn6.innerHTML = "X"; }
		document.getElementById('6').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 7) { 
		if (counter % 2) { 
			btn7.innerHTML = "O";
			} else { btn7.innerHTML = "X"; }
		document.getElementById('7').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 8) { 
		if (counter % 2) { 
			btn8.innerHTML = "O";
			} else { btn8.innerHTML = "X"; }
		document.getElementById('8').setAttribute("disabled","disabled"); 
	}
	if (btnNum == 9) { 
		if (counter % 2) { 
			btn9.innerHTML = "O";
			} else { btn9.innerHTML = "X"; }
		document.getElementById('9').setAttribute("disabled","disabled"); 
	}
}

function winner () {
	if (counter % 2) {
		console.log("O wins!");
		title.innerHTML = "O wins"
	} else { 
		console.log("X wins!"); 
		title.innerHTML = "X wins"
	}
}
