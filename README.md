# Code-Challenge-1

 Title 1-Chai Bora Ingredient Calculator

Project scope-creating a simple calculator to determine the basic ingredients needed to make a specific number of Kenyan Chai.

Here is the breakdown of my solution.

1-declared a function (calculateChaiIngredients)
       <function calculateChaiIngredients(){
        
       }

2-I initialised method  prompt()to  ask for user input.

     let cups=prompt('Karibu! How many cups of Chai Bora would you like to make?')

4-Converted the cups variables into a number using .number() method
      <cups=Number(cups);
      

5 -used an if statement to check the validation of the input.

      if(cups<=0){
alert('please enter a valid positive interger');
return;
}

6.Declared  default variables for the ingredients per cup.
const <water>=200;
const <milk>=50;
const <tealeaves>=1;
const <sugarSpoons>=2;

7.declared a formula to calculate and display the total ingredients.

const ingredientWater=water*cups;
const ingredientMilk=milk*cups;
const ingredientteaLeaves=teaLeaves*cups;
const ingredientsugarSpoons=sugarSpoons*cups;


alert(`For cup ${i} of Kenyan Chai,you will need):
-${ingredientWater}ml of water
-${ingredientMilk}ml of milk
-${ngredientteaLeaves} teaspoons of tea leaves
-${ingredientsugarSpoons}teaspoons of sugar.`


8.call the function.

calcuateChaiIngredients();

Title 2
Boda Boda ride fare estimator.

The project scope is to create a simple program that estimates the fare for a boda boda.

1-declare a function to calculate the bodaboda fare.
         <function calculateBodaFare(){

    }
2-declare a variabe  distanceInKm with a prompt method to ask for user input.
        let distanceInKm=prompt('Unafika wapi Boss? Kilometer ngapi?')
 3-declare other variables to initiate the baseFare and chargeper kilometer.
        let baseFare=50;
        let chargePerKm=15;
 4-use Number() method to covert the input to a number.
       distanceInKm=Number(distanceInKm);
 5-use an If statement to validate the input as an interger>0.
         if(distanceInKm<=0){
        alert('please unafika wapi mkuu');
    }
 6-declare another variable to initialize the formula for the total fare. 

         let totalFare=baseFare+(distanceInKm*chargePerKm);

        alert(`uko si mbali boss.Kukakilia pikipiki ni ${baseFare}ksh so mpaka huko itakuwa ${totalFare}.Twende boss.`)
7-call the function to calculate the boda fare.
        calculateBodaFare();


 // Task 3
 Project scope is to  simplified estimator for transaction fees.
 Here is my solution. 

1-declared function
        <function estimateTransactionFee(){
        }>

2-declare a varaible with a prompt method    
        let amountToSend=prompt('unatuma Ngapi?(kes):') 

3-use Number() method to covert the input to a number.
         amountToSend=Number(amountToSend);

 4-decared variables and formulas to be used in generating the total amount.
         let minimumFee=10;
         let maximumFee=70;
         let transactionFee=0.015;
         let totalTransactionFee=amountToSend*transactionFee;
          let totalAmount=amountToSend+totalTransactionFee;
         let totalAmountMin=amountToSend+minimumFee;
         let totalAmountMax=amountToSend+maximumFee;
  
  
5-use a conditional statement if to check on the total transcaction fee and give the user an output.
          if(totalTransactionFee<=minimumFee){
      
//alert 0r console.log
          alert( `Calculated transcationFee is ${minimumFee}:
          Total amount to be debited:${totalAmountMin}KES
      
      `);
          }
      else if(totalTransactionFee>minimumFee&&totalTransactionFee<maximumFee){
     alert( `Calculated transcationFee is ${totalTransactionFee}:
      Total amount to be debited:${totalAmount}KES`)
      
  }
           else if(totalTransactionFee>=maximumFee){
  
           alert (`Calculated transactionFee is ${maximumFee}:
         Total amount to be debited:${totalAmountMax}KES`);
      
  }
  

// call the function
estimateTransactionFee();


























