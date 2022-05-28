const billAmount = document.querySelector("#bill-amount");
const cashAmount = document.querySelector("#cash-amount");
const calculateBtn = document.querySelector("#calculate-btn");
const outputBox = document.querySelector("#output-box");
const noOfNotes = document.querySelectorAll(".no-of-note");

const Note = [2000, 500, 100, 50, 20, 10, 5, 1];

function calculateNotes(diff){
    for(let i = 0; i < Note.length; i++){
        const numberOfNotes = Math.trunc(diff / Note[i]);
        diff = diff % Note[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function calculateNoOfNotes(){
    var bill = billAmount.value;
    var cash = cashAmount.value;
    if(bill > 0){
        if(Number(cash) >= Number(bill)){
            const diff = cash - bill;
            calculateNotes(diff);
        }else{
            outputBox.innerText = "Cash Amount should be greater than Bill Amount";
        }
    }else{
        outputBox.innerText = "Bill Amount should be greater than 0";
    }
}

calculateBtn.addEventListener('click', calculateNoOfNotes);