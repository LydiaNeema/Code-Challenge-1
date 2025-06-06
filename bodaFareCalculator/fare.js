
//declare a function.
function calculateBodaFare(){
 
//use the prompt method to ask for users input
    let distanceInKm=prompt('Unafika wapi Boss? Kilometer ngapi?')


// declare other variables  initiate the baseFare and chargeper kilometer.
    let baseFare=50;
    let chargePerKm=15;

//-use Number() method to covert the input to a number.   
    distanceInKm=Number(distanceInKm);

 //use an If statement to validate the input as an interger>0.   
    if(distanceInKm<=0){
        alert('please unafika wapi mkuu');
    }
//declare another variable to initialize the formula for the total fare.
let totalFare=baseFare+(distanceInKm*chargePerKm);

alert(`uko si mbali boss.Kukakilia pikipiki ni ${baseFare}ksh so mpaka huko itakuwa ${totalFare}.Twende boss.`)
}
//calling the function
calculateBodaFare();