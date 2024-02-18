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

       Explanation steps wise
       1.Global Execution
               this
       2 Memory Phase
         val1->undefined
         val2->undefined
         addNun->defination
         result1->undefined
         result2->undefined

       3 Execution Phase
         val1=10
         val2=5
         addNum=>[Other execution thread /new variable environment] 
Note1         wapas se ek senbox bana hai jiske under sabse pahle memory phase hoga
        3(i) Memory Phase
        val1=undefined;
        val2=undefined;
        total=undefined
        
        3(ii)Execution Context
        num1=10;
        num2=5;
        total=15;
        result1=15

        total in return Global execution

// note After the complete our works its delete (Global execution)




 */
//Call Stacks

function one(){
       console.log("one");
       two()
}
function two(){
       console.log("two");
       three();
}
function three(){
       console.log("three");
}

one();
two();
three();