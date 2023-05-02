"Use strict";

//Input prinicpal
const amount = document.getElementById("amount");

//input interest
const interestRate = document.getElementById("interestRate");

//input loan length
const years = document.getElementById("years");

//output

const payments = document.getElementById("payments");

const totalInterest = document.getElementById("totalInterest");

//button

const calculate = document.getElementById("calculate");

//wire up
window.onload = init;


//button function

function init(){
    //code will run once oage finsih loading
    calculate.onclick = onCalculateClicked;
}

function onCalculateClicked(){
    console.log("Clicked!!");

    // get the known (user supplied) values.

    let principal = parseFloat(amount);
    let interest = parseFloat(interestRate) / 100 / 12;
    let length = parseFloat(payments) * 12;
    
    // If the result is a finite number, the user's input was good and
    // we have meaningful results to display*/
 
    let x = Math.pow(1 + interest, payments); //Math.pow computes powers
    let monthly = (principal*x*interest)/(x-1);
    

    const  monthlyPay = x * monthly.toFixed(2);
    const total = ((monthly*payments)-principal).toFixed(2);

    
    console.log("calculated the value of: " + monthlyPay);
    console.log("calculated the value of: " + total);

}
