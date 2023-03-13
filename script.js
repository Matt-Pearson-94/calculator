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
const bottomScreen = document.querySelector('.bottom-Screen')
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

topScreen.textContent = '0'