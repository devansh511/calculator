const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
let currentInput = '0'
let calculationOperator = ' '
let prevInput = '0'
 const updateScreen = (number) =>{
	calculatorScreen.value = number
}
numbers.forEach((number) =>{
	number.addEventListener("click",(event) => {
		updateScreen(event.target.value)
	})
})
const inputNumber = (number) =>{
	if (currentInput === '0'){
		currentInput = number
	}
	else{
		currentInput += number
	}
}
numbers.forEach((number) =>{
	number.addEventListener("click" , (event)=> {
    inputNumber(event.target.value)
    console.log(currentInput)
    updateScreen(currentInput)
	})
})
const operators = document.querySelectorAll(".operator")
const inputOperator = (operator) =>{
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}
operators.forEach((operator) =>{
	operator.addEventListener("click",(event) =>{
		inputOperator(event.target.value)
		console.log(currentInput)
	})
})
const equalSign = document.querySelector(".equal-sign")
equalSign.addEventListener("click",() => {
	calculate()
	updateScreen(currentInput)
})

const calculate = () => {
	let result = 0
	
	switch(calculationOperator){
		case '+':
		result = parseInt(prevInput) + parseInt(currentInput)
		break
		case '-':
		result = parseInt(prevInput) - parseInt(currentInput)
		break
		case '*':
		result = parseInt(prevInput) * parseInt(currentInput)
		break
		case '/':
		result = parseInt(prevInput) / parseInt(currentInput)
		break
		case '%':
		result = ( parseInt(prevInput) / parseInt(currentInput) ) / 100
		break
		default:
		 return
	}
	currentInput = result.toString()
	calculationOperator = ' '
}


const clearAll = () => {
	prev = '0'
	calculationOperator = ' '
	currentInput = '0'
}
const clearBtn = document.querySelector(".all-clear")
clearBtn.addEventListener("click",() => {
clearAll()
updateScreen(currentInput)
})
// Code ends here