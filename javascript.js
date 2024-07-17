const numbers=document.querySelectorAll('.num');
const operations=document.querySelectorAll('.op');
const equal=document.querySelector('#equal');
const display=document.querySelector('.display');
const clearBtn=document.querySelector('#clear');


let numStr='';
let operator='';
let operand1=null;
let operand2=null;

numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        numStr+=e.target.textContent;
        display.textContent=numStr;
    });
});


operations.forEach(operation=>{
    operation.addEventListener('click',(e)=>{
        operand1= +numStr;
        operator=e.target.textContent;
        display.textContent='';
        display.textContent=operator;
        numStr='';
    });
});




function calculate(op1,op2,operator){
    
    console.log(`calculating: ${op1} ${operator} ${op2}` )
    
    let result=0;
    switch(operator){
    case '+':
        result=op1+op2;
        break;
    case '-':
        result=op1-op2;
        break;
    case '*':
        result=op1*op2;
        break;
    case '/':
        result=op1/op2;
        break;
    case '%':
        result=op1%op2;
}
display.textContent='';
display.textContent=result;

return result;
}

equal.addEventListener('click',()=>{
    operand2= +numStr;
    numStr='';
    calculate(operand1,operand2,operator);
});


clearBtn.addEventListener('click',clear);
function clear(){
    display.textContent='';
    numStr='';
    operator='';

    operand1=null;
    operand2=null;
}








