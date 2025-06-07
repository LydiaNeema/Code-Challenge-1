# Code-Challenge-1

 # Title 1-Chai Bora Ingredient Calculator

- Project scope-creating a simple calculator to determine the basic ingredients needed to make a specific number of Kenyan Chai.

- Here is the breakdown of my solution.

## solution

- Declared a function (calculateChaiIngredients)

```js 
function calculateChaiIngredients(){
        
       }
```

- I initialised method  prompt()to  ask for user input.

```js
     let cups=prompt('Karibu! How many cups of Chai Bora would you like to make?')
```

- Converted the cups variables into a number using .number() method

```js
      cups=Number(cups);
```

- Used an if statement to check the validation of the input.

```js 
     if(cups<=0){
alert('please enter a valid positive interger');
return;
}
```

- Declared  default variables for the ingredients per cup.

```js 
const water=200;
const milk=50;
const tealeaves=1;
const sugarSpoons=2;
```

- Declared a formula to calculate and display the total ingredients.

``` js
const ingredientWater=water*cups;
const ingredientMilk=milk*cups;
const ingredientteaLeaves=teaLeaves*cups;
const ingredientsugarSpoons=sugarSpoons*cups;


alert(`For cup ${cups} of Kenyan Chai,you will need):
-${ingredientWater}ml of water
-${ingredientMilk}ml of milk
-${ngredientteaLeaves} teaspoons of tea leaves
-${ingredientsugarSpoons}teaspoons of sugar.`
```

- call the function.

```js
calcuateChaiIngredients();
```

# Title 2

## Boda Boda ride fare estimator.


- The project scope is to create a simple program that estimates the fare for a boda boda.

- Declare a function to calculate the bodaboda fare.

```js  
       function calculateBodaFare(){

    }
```

- Declare a variabe inside the function-(distanceInKm)with a prompt method to ask for user input.

```js 
       let distanceInKm=prompt('Unafika wapi Boss? Kilometer ngapi?')
```

- Declare other variables to initiate the baseFare and chargeper kilometer.

```js 
let baseFare=50;
let chargePerKm=15;
```

- Use Number() method to covert the input to a number.

```js
       distanceInKm=Number(distanceInKm);
```

- Use an If statement to validate the input as an interger>0.

```js 
     if(distanceInKm<=0){
        alert('please unafika wapi mkuu');
    } 
 ``` 

- Declare another variable to initialize the formula for the total fare. 

```js
         let totalFare=baseFare+(distanceInKm*chargePerKm);

        alert(`uko si mbali boss.Kukakilia pikipiki ni ${baseFare}ksh so mpaka huko itakuwa ${totalFare}.Twende boss.`)
 ``` 

- Call the function to calculate the boda fare.

```js
 calculateBodaFare();
 ```

 # Task 3

 ## Project scope is to  simplified estimator for transaction fees.

 - Here is my solution. 

- Declare function

```js
      function estimateTransactionFee(){
        }
```

- Declare a varaible with a prompt method 

```js 
 let amountToSend=prompt('unatuma Ngapi?(kes):') 
```

- Use Number() method to covert the input to a number.

```js      
   amountToSend=Number(amountToSend);
```

- Decared variables and formulas to be used in generating the total amount.

 ```js    
         let minimumFee=10;
         let maximumFee=70;
         let transactionFee=0.015;
         let totalTransactionFee=amountToSend*transactionFee;
         let totalAmount=amountToSend+totalTransactionFee;
         let totalAmountMin=amountToSend+minimumFee;
         let totalAmountMax=amountToSend+maximumFee;
  
 ``` 

- Use a conditional statement if to check on the total transcaction fee and give the user an output.

 ```js 
          if(totalTransactionFee<=minimumFee){

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
 ``` 

- Call the Function

```js 
      estimateTransactionFee();
```


























