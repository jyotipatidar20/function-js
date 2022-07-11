var c=require("readline-sync")

function func(weight,height2){
weight=c.questionInt("inter the number")
height2=c.questionInt("inter the number")
bmi=weight/height2
console.log(bmi)
if (bmi<=18.5){
    console.log ("underweight")}
 else if (bmi<=25.0){
    console.log( "normal")}
  else if (bmi<=30.0){
    console.log( "overweight")}
  else if (bmi>30){
    console.log("obese")}
}
func()

    
    



