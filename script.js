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
            handleDecimal(event.target.innerText, display);
            console.log('decimal');
        }
    
        if (action === 'clear') {
            console.log('clear button!');
            clear(display);
        }
    
        if (action === 'calculate') {
            calculate(display);
            console.log('equal button!');
        }
    });
}
if(document.querySelector('.calculator')){
    init();
}

var canOp = false;
var canDec = true;
var canEval = false;

function handleNum(num, screen){
    if (screen === '0') {
        setScreen(num, screen);
    } else {
        addToScreen(num, screen);
    }
    canOp = true;
    canEval = true;
    //currNum[].push;
}

function handleOperator(operator, screen) {
    if(canOp === true){
        canOp = false;
        canDec = true;
        canEval = false;
        return addToScreen(operator, screen);
    }
}

function clear(screen){
    clearScreen(screen)
    canEval = false;
}

function handleDecimal(val, screen){
    if(canDec === true){
        canDec = false;
        canEval = false;
        addToScreen(val, screen);
    }
}

function calculate(screen){
    if (canEval === true){
        setScreen(eval(screen.innerText), screen);
    } 
}

// DOM HELPER FUNCTIONS

function setScreen(val, screen){
    screen.innerText = val;
}

function addToScreen(val, screen){
    screen.innerText += val;
}

function clearScreen(screen){
    screen.innerText = 0;
}

