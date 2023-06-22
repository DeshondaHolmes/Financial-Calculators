"Use strict";

//Input prinicpal
const loanAmount = document.getElementById("loanAmount");
console.log(loanAmount);

//input interest
const interestRate = document.getElementById("interestRate");
console.log(interestRate);

//input loan length
const years = document.getElementById("years");
console.log(years);
//output

const monthlyPayment = document.getElementById("monthlyPayment");
console.log(monthlyPayment);


const totalInterest = document.getElementById("totalInterest");
console.log(totalInterest);

//button

const calculate = document.getElementById("calculate");

const calculate = document.getElementById("calculate");

//wire up
window.onload = init;


//button function

function init() {
    //code will run once oage finsih loading
    calculate.onclick = onCalculateClicked;
}

function onCalculateClicked() {
    console.log("Clicked!!");

    // get the known (user supplied) values.

    let principal = parseFloat(loanAmount.value);
    console.log(principal);
    let interest = parseFloat(interestRate.value) / 100 / 12;
    console.log(interest);
    let length = parseFloat(years.value) * 12;
    console.log(length);

    // If the result is a finite number, the user's input was good and
    // we have meaningful results to display*/

    if (isFinite(principal) && isFinite(interest) && isFinite(length)) {
        let x = Math.pow(1 + interest, length);
        let monthly = (principal * x * interest) / (x - 1);

        const monthlyPay = monthly.toFixed(2);
        const total = ((monthly * length) - principal).toFixed(2);

        console.log("Calculated the value of: " + monthlyPay);
        console.log("Calculated the value of: " + total);

        // Display the results
        monthlyPayment.value = "$" + monthlyPay;
        totalInterest.value = "$" + total;
    } else {
        // At least one of the user-supplied values was invalid
        monthlyPayment.value = "";
        totalInterest.value = "";
    }

}
/* 
Calculate payment for loan 


M  =  P * i**monthly/1-(1+i**monthly)**-L`months


M=Monthly principal and interest paymeny
P=Principal (loan amount)
i=monthly interest rate , decimal form (ex 1% =0.01)
L=length of loan in monhts
*/