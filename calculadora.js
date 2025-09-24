let num1 = "";
let num2 = "";
let num3 = "";
let num4 = "";
let num5 = "";
let num6 = "";
let num7 = "";
let num8 = "";
let num9 = "";
let num0 = "";
let op = "";


function calcular(num1,num2,op){
    switch(op){
        case "+":
        return num1+num2;
        case "-":
        return num1-num2;
        case "*":
        return num1*num2;
        case "/":
        return num1/num2;
    default:
        return "Operacion no valida"

    }
}

document.getElementById("display").innerText="0";

const btnNum1=document.querySelector("#num1");
const btnNum2=document.querySelector("#num2");
const btnNum3=document.querySelector("#num3");
const btnNum4=document.querySelector("#num4");
const btnNum5=document.querySelector("#num5");
const btnNum6=document.querySelector("#num6");
const btnNum7=document.querySelector("#num7");
const btnNum8=document.querySelector("#num8");
const btnNum9=document.querySelector("#num9");
const btnNum0=document.querySelector("#num0");

const btnOpSum=document.querySelector("#opSum");
const btnOpRes=document.querySelector("#opRes");
const btnOpMul=document.querySelector("#opPor");
const btnOpDiv=document.querySelector("#opDiv");
const btnOpIgual=document.querySelector("#igual");



// de manera antigua


//se puede hacer una funcion que muestre el display
btnNum1.addEventListener("click",function() {
    document.getElementById("display").innerText="1";
    num1=1;
}  );

btnNum2.addEventListener("click",function() {
    document.getElementById("display").innerText="2";
    num2=2;
}  );

btnNum3.addEventListener("click",function() {
    document.getElementById("display").innerText="3";
    num3=3;
}  );
btnNum3.addEventListener("click",function() {
    document.getElementById("display").innerText="3";
    num3=3;
}  );
btnNum3.addEventListener("click",function() {
    document.getElementById("display").innerText="3";
    num3=3;
}  );
btnNum6.addEventListener("click",function() {
    document.getElementById("display").innerText="6";
    num6=6;
}  );
btnNum7.addEventListener("click",function() {
    document.getElementById("display").innerText="7";
    num7=7;
}  );
btnNum8.addEventListener("click",function() {
    document.getElementById("display").innerText="8";
    num8=8;
}  );
btnNum9.addEventListener("click",function() {
    document.getElementById("display").innerText="9";
    num9=9;
}  );
btnNum0.addEventListener("click",function() {
    document.getElementById("display").innerText="0";
    num0=0;
}  );




btnOpSum.addEventListener("click",function() {
    op="+"
} )
btnOpDiv.addEventListener("click",function() {
    op="/"
} )
btnOpMul.addEventListener("click",function() {
    op="*"
} )
btnOpIgual.addEventListener("click",function() {
    const total=calcular(num1,num2,op);
    document.getElementById("display").innerText= total;
} )
btnOpRes.addEventListener("click",function() {
    op="-"
} )











console.log(btnNum1);