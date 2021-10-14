const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   
   function getNumber(sum=0){
    readline.question(`enter a number `, num=>{
        if(num.toLowerCase() === "stop" ||num.toUpperCase() === "STOP"){
            console.log(`total is ${sum}`)
            readline.close();
        }
        else{
              getNumber(parseInt(num)+sum);
        }
        
     
        
    });

   }

   getNumber();