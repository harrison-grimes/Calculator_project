function init() {
    console.log(document.querySelector('.button-operator'));
    var calculator = document.querySelector('.calculator');
    var display = document.querySelector('.calculator-display');

    calculator.addEventListener('click', function(event){
        var button = event.target;
        var action = button.dataset.action;
        if (!event.target.matches("button")) {
            return;
        }
        if (!action) {
            handleNum(event.target.innerText, display);
        }
        if (['+','-','*','/'].includes(action)) {
            console.log('operator button!')
            handleOperator(action, display);
        }
        
        if (action === 'decimal') {
            handleDecimal(display);
        }
    
        if (action === 'clear') {
            console.log('clear button!');
            clear()
        }
    
        if (action === 'calculate') {
            calculate()
            console.log('equal button!');
        }
    });
}
if(document.querySelector('.calculator')){
    init();
}

function handleNum(num, screen){
    if (screen === '0') {
        setScreen(num, screen);
    } else {
        addToScreen(num, screen);
    }
}

function handleOperator(operator, screen){


}

/*if (displayedNum === '0') {
    //display.textContent = buttonContent
} else {
    //display.textContent = displayedNum + buttonContent
}
//console.log('number button!');

function addNumber(value){
    var currentDisplay = display.innerText;
    display.innerText = currentDisplay + value;
}*/

//var currNum = current numbers in display not followed by an operator
//var currOp = operators that are not followed by a number.
//var currComponents = [] array that contains all components entered 

//eval(components.join);

// DOM HELPER FUNCTIONS

function setScreen(val, screen){
    screen.innerText = val;
}

function addToScreen(val, screen){
    screen.innerText += val;
}