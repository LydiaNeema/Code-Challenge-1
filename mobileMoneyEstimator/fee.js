
//declare function
function estimateTransactionFee(){

//declare a varaible with a prompt method    
  let amountToSend=prompt('unatuma Ngapi?(kes):') 

//use Number() method to covert the input to a number.
  amountToSend=Number(amountToSend);

 //decared variables and formulas 
  let minimumFee=10;
  let maximumFee=70;
  let transactionFee=0.015;
  let totalTransactionFee=amountToSend*transactionFee;
  let totalAmountMin=amountToSend+minimumFee;
  let totalAmountMax=amountToSend+maximumFee;
  
  
//use a conditional statement if to check on the total transcaction fee and give the user an output.
  if(totalTransactionFee<=minimumFee){
      
      alert( `Calculated transcationFee is ${minimumFee}:
      Total amount to be debited:${totalAmountMin}KES
      
      `);
      
  }
  else if(totalTransactionFee>=maximumFee){
  
  alert (`Calculated transactionFee is ${maximumFee}:
  Total amount to be debited:${totalAmountMax}KES`);
      
  }
  // call the function
}
estimateTransactionFee();