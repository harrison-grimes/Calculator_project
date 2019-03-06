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
            handleOperator(action, display);
        }
        
        if (action === 'decimal') {
            handleDecimal(event.target.innerText, display);
        }
    
        if (action === 'clear') {
            clear(display);
        }
    
        if (action === 'calculate') {
            calculate(display);
        }
    });

    document.addEventListener('keyUp', function(event){
        if(event.key === '.'){
            handleDecimal();
            console.log('decimal');
        } else if(+event.key >= 0 && +event.key <= 9){
            handleNum(event.key ,display);
        } else if(['+','-','*','/'].includes(event.key)){
            handleOperator(event.key, display)
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
    if (screen.innerText === '0') {
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
    canOp = false;
    canDec = true;
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

