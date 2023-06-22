"Use strict";

const deposit = document.getElementById("deposit");

const interestRate = document.getElementById("interestRate");

const cdTerm = document.getElementById("cdTerm");
const futureValue = document.getElementById("futureValue");
const interestEarned = document.getElementById("interestEarned");

const calculateBtn = document.getElementById("calculateBtn");

const resetBtn = document.getElementById("resetBtn");

window.onload = init;


function init() {
    calculateBtn.onclick = onCalculateBtnClicked;
    resetBtn.onclick = onResetBtnClicked;

}




function onCalculateBtnClicked() {

   let  principal = parseFloat(deposit.value);
   let  interest = parseFloat(interestRate.value)/100/12;
   let  years = parseFloat (cdTerm.value);


   const inFutureValue = principal * Math.pow(1 + interest, years);
   const earnedInterest = inFutureValue - principal;

   futureValue.value = inFutureValue.toFixed(2);
   interestEarned.value = earnedInterest.toFixed(2)

    console.log("clicked calculate button row");

    console.log(principal);

    console.log(interest);

    console.log(years);



}

function onResetBtnClicked() {
    interestEarned.value = "";
    interestRate.value = "";
    futureValue.value = "";
    deposit.value = "";
    cdTerm.value = "";

    console.log("clicked reset button row");
}

