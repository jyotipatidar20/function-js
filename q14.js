var c =require("readline-sync");
function perfect(num){
var i=1
var sum=0
    while (i<num)
        if (num%i==0){
        sum=sum+i
    i=i+1
    if (sum==num){
        console.log("perfect number")}}
    else{
        console.log("not perfect number")}
}
perfect(num=c.questionInt("inter the number"))