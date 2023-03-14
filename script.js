// Every button must be accessible by either clicking or typing the corresponding key
// Once a button is pressed, it will display on the screen
// Once and operator is pressed, it will display at the top of the screen as a log
// If zero is pressed first, it needs to be removed as you can't have a number begining with zero
// Only one decimal can be entered


// Keycodes...
// 0 = 96
// 1 = 97
// 2 = 98
// 3 = 99
// 4 = 100
// 5 = 101
// 6 = 102
// 7 = 103
// 8 = 104
// 9 = 105
// . = 110
// = = 13
// + = 107
// - = 109
// * = 106
// / = 111
// backspace = 8
// delete = 46

const topScreen = document.querySelector('.top-screen')
const bottomScreen = document.querySelector('.bottom-screen')
const deleteButton = document.querySelector('#delete')
const clearButton = document.querySelector('#all-clear')
const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const decimal = document.querySelector('#decimal')
const equals = document.querySelector('#equals')
const plus = document.querySelector('#plus')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')

let calculationOne = "";
let calculationTwo = "";
let secondNumber;
let numCheck;
let firstNumber;
let operator;
let topText = "";
let sum = 0;

document.addEventListener('keydown', calculate)

function calculate(e) {
    if (firstNumber === undefined) {
        if (e.keyCode === 96 || zero.addEventListener("onclick", e)) {
            one.classList.toggle('hello')
            setTimeout(function () {
            one.classList.toggle('hello')
            }, 100)
            if (calculationOne.length < 1) {
                calculationOne;
            } else {
                calculationOne += 0
                bottomScreen.textContent = calculationOne 
            }          
        } else if (e.keyCode === 97) {
            calculationOne += 1
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 98) {
            calculationOne += 2
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 99) {
            calculationOne += 3
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 100) {
            calculationOne += 4
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 101) {
            calculationOne += 5
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 102) {
            calculationOne += 6
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 103) {
            calculationOne += 7
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 104) {
            calculationOne += 8
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 105) {
            calculationOne += 9
            bottomScreen.textContent = calculationOne
        } else if (e.keyCode === 110) {
            calculationOne += '.'
            bottomScreen.textContent = calculationOne
        } 
        if (e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 106 || e.keyCode === 111) {
            operatorFunc(e)
        }
    } else {
        calculateTwo(e)
    }
    if (e.keyCode === 13) {
        if (operator === '+') {
            sum = firstNumber + Number(calculationTwo)
            // console.log(Number(calculationTwo))
            console.log(sum)
            bottomScreen.textContent = sum
        } else if (operator === '-') {
            sum = firstNumber - Number(calculationTwo)
            // console.log(Number(calculationTwo))
            console.log(sum)
            bottomScreen.textContent = sum
        } else if (operator === '*') {
            sum = firstNumber * Number(calculationTwo)
            // console.log(Number(calculationTwo))
            console.log(sum)
            bottomScreen.textContent = sum
        } else if (operator === '/') {
            sum = firstNumber / Number(calculationTwo)
            // console.log(Number(calculationTwo))
            console.log(sum)
            bottomScreen.textContent = sum
        }
    }
}


function operatorFunc(e) {
    if (e.keyCode === 107) {
        operator = '+'
        firstFigure()
        plusTotal()
        console.log(sum)
        console.log(firstNumber)
    } else if (e.keyCode === 109) {
        operator = '-'
        firstFigure()
        subtractTotal()
        console.log(sum)
    } else if (e.keyCode === 106) {
        operator = '*'
        firstFigure()
        multiplyTotal()
        console.log(sum)
    } else if (e.keyCode === 111) {
        operator = '÷'
        firstFigure()
        divideTotal()
        console.log(sum)
    }
}

function calculateTwo(e) {
    if (e.keyCode === 96) {
        if (calculationTwo.length < 1) {
            calculationTwo;
        } else {
            calculationTwo += 0
            bottomScreen.textContent = calculationTwo 
        }          
    } else if (e.keyCode === 97) {
        calculationTwo += 1
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 98) {
        calculationTwo += 2
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 99) {
        calculationTwo += 3
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 100) {
        calculationTwo += 4
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 101) {
        calculationTwo += 5
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 102) {
        calculationTwo += 6
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 103) {
        calculationTwo += 7
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 104) {
        calculationTwo += 8
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 105) {
        calculationTwo += 9
        bottomScreen.textContent = calculationTwo
    } else if (e.keyCode === 110) {
        calculationTwo += '.'
        bottomScreen.textContent = calculationTwo
    }
}

function firstFigure() {
    firstNumber = Number(calculationOne)
    topText = `${calculationOne} ${operator}`
    topScreen.textContent = topText
    calculationOne = '';
    console.log(calculationOne)
}

function plusTotal() {
    sum = firstNumber + Number(calculationTwo)
    return sum
}

function subtractTotal() {
    sum = firstNumber - secondNumber
    return sum
}

function multiplyTotal() {
    sum = firstNumber * secondNumber
    return sum
}

function divideTotal() {
    sum = firstNumber / secondNumber
    return sum
}

function sumAll() {
    sum = firstNumber + Number(calculationTwo)
    // console.log(Number(calculationTwo))
    console.log(sum)
    bottomScreen.textContent = sum

}