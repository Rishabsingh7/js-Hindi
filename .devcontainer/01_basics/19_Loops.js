console.log("Loops/Iteration");

// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }
// for (let i = 1; i <=10; i++) {
//     if(i==5){
//         console.log("5 is best number");
//     }
//     console.log(i);
// }


for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value:${i}`);
    for(let j=0;j<=10;j++){
        //console.log(`Inner loops value: ${j} and inner loops ${i}`)
        console.log((i+'*'+j+'='+i*j));

    }
    
}