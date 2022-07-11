var c= require("readline-sync")
function fectorial(num){
var i=1
while (num>0){
i=i*num
num=num-1
    console.log(i)
}}
fectorial(num=c.questionInt("enter the number"))

