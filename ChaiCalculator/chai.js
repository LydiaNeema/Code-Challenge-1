//function declaration
       function calculateChaiIngredients(){
        //block code
       }

//initialize prompt method

     let cups=prompt('Karibu! How many cups of Chai Bora would you like to make?')

//Convert the cups variables into a number using .number() method
      cups=Number(cups);
      

//use an if statement  to check the validation of the input.

      if(cups<=0){
alert('please enter a valid positive interger');
return;
}

//Declare  default variables for the ingredients per cup.
const water=200;
const milk=50;
const teaLeaves=1;
const sugarSpoons=2;

//declared a formula to calculate and display the total ingredients.

const ingredientWater=water*cups;
const ingredientMilk=milk*cups;
const ingredientteaLeaves=teaLeaves*cups;
const ingredientsugarSpoons=sugarSpoons*cups;


//dispaly the results to the user

console.log(`For cup ${cups} of Kenyan Chai,you will need):
-${ingredientWater}ml of water
-${ingredientMilk}ml of milk
-${ingredientteaLeaves} teaspoons of tea leaves
-${ingredientsugarSpoons}teaspoons of sugar.`)




//calling the function.

calculateChaiIngredients();


