const numbers=document.querySelectorAll('.num');
const operations=document.querySelectorAll('.op');
const equalBtn=document.querySelector('#equal');
const display=document.querySelector('.display');
const clearBtn=document.querySelector('#clear');
const signBtn=document.querySelector('#sign');

let numStr='';
let operator='';
let operand1=null;
let operand2=null;

signBtn.addEventListener('click',()=>{
    if(numStr){
        if(numStr.includes('-')){
            numStr=numStr.substring(1);
        }else{
            numStr= '-'+numStr;
        }
        display.textContent=numStr
    }
});


numbers.forEach(number => {
    number.addEventListener('click',(e)=>{
        numStr+=e.target.textContent;
        display.textContent=numStr;
    });
});


operations.forEach(operation=>{
    operation.addEventListener('click',(e)=>{
        if(operator){
            equal();
            operator=e.target.textContent;
        }else{
            operator=e.target.textContent;
            
            if(!operand1) operand1= +numStr;
            else operand2= +numStr;
            
            display.textContent='';
            display.textContent=operator;
        }
        numStr='';
    });
});


function calculate(op1,op2,operator){
    switch(operator){
    case '+':
        return op1+op2;
    case '-':
        return op1-op2;
    case '*':
        return op1*op2;
    case '/':
        return op1/op2;
    case '%':
        return op1%op2;
}
}

function equal(){
    operand2= +numStr;
    numStr='';

    operand1=calculate(operand1,operand2,operator);
    
    display.textContent='';
    
    if(operand1 === Infinity) display.textContent="fr? 💀"
    else display.textContent=operand1;

    operand2=null;
    operator='';
}

equalBtn.addEventListener('click',equal);


clearBtn.addEventListener('click',clear);
function clear(){
    display.textContent='';
    numStr='';
    operator='';

    operand1=null;
    operand2=null;
}








