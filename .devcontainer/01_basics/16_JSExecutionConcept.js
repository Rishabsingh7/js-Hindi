/**
       JavaScript Execution Context 
       
       codeInJs   => Global Execution context

       Global ko refer kar diya jata hai this

Note1 JavaScript is single Thread

       Execution Context 
       1 Global Execution Context
       2 functon Execution Context
       3 Eval Execution Context

       How to execute JavaScript code

       its js code {} there are two phases in run
       1 Memory Creation Phase(creation phase)
       in the memory creation phase only memory allocate
       2 Execution phase

       Example
       let val1=10
       let val2=5
       function addNum(num1,num2){
        let total=num1+num2
        return total
       }
       let result1=addNum(val1,val2)
       let result2=addNum(10,2)
 */