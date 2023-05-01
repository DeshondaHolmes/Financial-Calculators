"Use strict";

//Input prinicpal
const txtInputP = document.getElementById("txtInputP");

//input interest
const txtInputIr = document.getElementById("txtInputIr");

//input loan length
const txtInputL = document.getElementById("txtInputL");





//output


const txtOutputCost = document.getElementById("txtOutputCost");

const txtOutputTotal = document.getElementById("txtOutputTotal");


//button

const calculateBtn = document.getElementById("calculateBtn");


//wire up
window.onload = init;



//button function

function init(){
    console.log("I work")


    //code will run once oage finsih loading
    calculateBtn.onclick = onCalculateBtnClicked;


}


/*function onCalculateBtnClicked(){
   
    console.log("I work")

    let 
}




/* 
Calculate payment for loan 


M  =  P * i**monthly/1-(1+i**monthly)**-L`months


M=Monthly principal and interest paymeny
P=Principal (loan amount)
i=monthly interest rate , decimal form (ex 1% =0.01)
L=length of loan in monhts
*/

/*function onConvertBtnClicked(){
    console.log("Clicked!!");

    // get the known (user supplied) values.
    let userTypedValue = txtInput.value;
    let valueAsNumber = parseFloat(userTypedValue);
    console.log("Got the value from the textbox it was: " + userTypedValue);

    // calculate the unknown..
    let fahrenheit = valueAsNumber * (9/5) + 32;
    
    console.log("calculated the value of: " + fahrenheit);


    // display the results to the user
    txtOutput.value = fahrenheit;

}*/