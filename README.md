# Code-Challenge-1

Chai Bora Ingredient Calculator

Project scope-creating a simple calculator to determine the basic ingredients needed to make a specific number of Kenyan Chai.
Here is the breakdown of my solution.

1-declared a function (calculateChaiIngredients)
       function calculateChaiIngredients(){
        //block code
       }

2-I initialised method  prompt()to  ask for user input.

     let cups=prompt('Karibu! How many cups of Chai Bora would you like to make?')

4-Converted the cups variables into a number using .number() method
      cups=Number(cups);
      

5 -used number.isInterger method  to check the validation of the input in an if statement.

      if(!Number.isInterger(cups) || cups<=0){
alert('please enter a valid positive interger');
return;
}

6.Declared  default variables for the ingredients per cup.
const <water>=200;
const <milk>=50;
const <tealeaves>=1;
const <sugarSpoons>=2;

7.used a for loop to calculate and display the total ingredients.

for(let i=1,i<=cups,i++){
const ingredientWater=water*i;
const ingredientMilk=milk*i;
const ingredientteaLeaves=tealeaves*i;
const ingredientsugarSpoons=sugarSpoons*i;

alert(`For cup ${i} of Kenyan Chai,you will need):
-${ingredientWater}ml of water
-${ingredientMilk}ml of milk
-${ngredientteaLeaves} teaspoons of tea leaves
-${ingredientsugarSpoons}teaspoons of sugar.`

}
8.call the function.

calcuateChaiIngredients();


















const water=200;
const milk=50;
const teaspoons=1;
const sugarSpoons=2;

3.Declare formuas to calculate the total amount of ingredients used depending on the users propmt input.
const ingredientWater=water*cups;
const ingredientMilk=milk*cups;
const ingredientTeaLeaves=teaspoons*cups;
const ingredientSugar=sugarspoons*cups;


4.create an an alert to give the user feedback.
alert('To make ${}'cups of Kenyan Chai,you will need
-${ingredientWater}ml of water
-${ingredientMilk} m of milk
-${ingredientTeaLeaves} teaspons
-${ingredient}





)