// Stack object
var Stack = function() {
	
}

var calculateExpression = function(expression) {
	return "result";
}

var onButtonClick = function(e) {
	var symb = $(e).html();	
	var display = $('#display');

	// parse symbol if x^2, ln, sin, cos, !, sqrt
	// x^2
	console.log(symb.charCodeAt(0));
	if(symb.charCodeAt(0) == 178) {
		symb = String.fromCharCode(178);
	}
	// sqrt 
	else if(symb.charCodeAt(0) == 8730) {
		console.log("fired");
		symb = String.fromCharCode(8730);
	} 
	else if(symb == 'sin') {
		symb = 'sin(';
	}
	else if(symb == 'cos') {
		symb = 'cos(';
	}
	else if(symb == 'Ln') {
		symb = 'ln(';
	} 
	else if(symb == 'x!') {
		symb = '!';
	} 
	else if(symb == '=') {
		result = calculateExpression(display.html());
		display.html(result);
		return;
	}

	// Symbols
	switch(symb) {
		case 'CE':
			display.html("");
			break;

		case 'C':
			str = display.html();
			display.html(str.substring(0, str.length - 1));
			break;
		default: 
			display.append(symb);
	}
}

var main = function() {
	$('.button').click(function() {
		onButtonClick(this);
	});
}

$(document).ready(main);