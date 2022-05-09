
let lengthConv = document.getElementsByClassName("conv")[0]
let volConv = document.getElementsByClassName("conv")[1]
let massConv = document.getElementsByClassName("conv")[2]

let input = document.getElementsByClassName("btn")[0].textContent

function lengthCalc() {
    let meters = input
    let feet = (input * 3.28084).toFixed(3)
    // console.log(meters + " meters = " + feet + " feet | " + feet + " feet = " + meters + " meters")
    return meters + " meters = " + feet + " feet | " + feet + " feet = " + meters + " meters"
}

function volCalc() {
    let liters = input
    let gallons = (input / 3.785).toFixed(3)
    return liters + " liters = " + gallons + " gallons | " + gallons + " gallons = " + liters + "liters"

}

function massCalc() {
    let kilos = input
    let pounds = (input * 2.205).toFixed(3)
    return kilos + " kilos = " + pounds + " pounds | " + pounds + " pounds = " + kilos + "kilos"
}

function convert() { 
    lengthConv.textContent = lengthCalc()
    volConv.textContent = volCalc()
    massConv.textContent = massCalc()
}

function changeInput() {
    btnEl = document.getElementsByClassName("btn")[0]
    let userInput = window.prompt("Enter a new number to be converted: ")
    if (userInput == null || +userInput == NaN || userInput.trim().length === 0) {
        alert("Invalid Number!")
        btnEl.textContent = 0
        input = 0
        convert()
    }
    else {
        btnEl.textContent = +userInput
        input = userInput
        convert()
    }
    // console.log(userInput)
}