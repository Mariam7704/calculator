const numbers=document.querySelectorAll('.num');
const operations=document.querySelectorAll('.op');
const equalBtn=document.querySelector('#equal');
const display=document.querySelector('.display');
const clearBtn=document.querySelector('#clear');
const signBtn=document.querySelector('#sign');
const fPointBtn=document.querySelector('#fPoint');

const keyMap={
    '0': '#zero',
    '1': '#one',
    '2': '#two',
    '3': '#three',
    '4': '#four',
    '5': '#five',
    '6': '#six',
    '7': '#seven',
    '8': '#eight',
    '9': '#nine',
    '+': '#plus',
    '-': '#minus',
    '*': '#multiplication',
    '/': '#division',
    '%': '#mod',
    '.':'#fPointBtn',
    '_':'#sign',
    'Enter': '#equalBtn',
    'Escape': '#clearBtn'
};

let numStr='';
let operator='';
let operand1=null;
let operand2=null;


document.addEventListener('keydown', (e) => {
    if (keyMap[e.key]) {
        document.querySelector(keyMap[e.key]).click();
    }
});

fPointBtn.addEventListener('click',()=>{
    if(numStr){
        if(!numStr.includes('.')){
        numStr+='.';
        display.textContent=numStr;
        }
    }
});


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
        if(numStr.length<20){
        numStr+=e.target.textContent;
        display.textContent=numStr;
        }
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
    operand1=Number(operand1.toPrecision(20));
    
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








