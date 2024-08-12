let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");


let errorMessage = document.getElementById("errorMessage");

let errorMessageValue = "Please Enter a Valid input.";

function calculateButton() {

    let billAmountInput = billAmount.value;
    let percentageTipInput = percentageTip.value;

    let cauculatedTip = (parseInt(percentageTipInput / 100)) * parseInt(billAmountInput);
    let totalAmountAnswer = parseInt(billAmountInput) + cauculatedTip;

    if (billAmountInput === "") {
        errorMessage.textContent = errorMessageValue;
    }

    else if (percentageTipInput === "") {
        errorMessage.textContent =  errorMessageValue;
    }

    else{
        
        errorMessage.textContent = "";
        
        tipAmount.value = cauculatedTip;
        totalAmount.value = totalAmountAnswer;

    }

    

    

}