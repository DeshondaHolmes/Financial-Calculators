"Use strict";

/* 
Calculate CD Formula

A=P(1+r/n)**(nt)

A=total CD will be wort at the end of the term , including amount input
P= principal , or amount inout when you bought CD 
R= Rate or APY (Annual interest rate, expressed as decimal)EX : interest rate 1.25 APY , r is 0.0125
n= number of times that interest in compaunded every year , (n=365,interest compounded daily )
t=time , number of years until maturity date

*/

const txtInput = document.getElementById("txtInput");

const txtOutput = document.getElementById("txtOutput");

const calculateBtn = document.getElementById("calculateBtn");

window.onload = init;


function init(){
    calculateBtn.onclick = onCalculateBtnClicked;
}
