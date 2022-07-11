// limit=int(input("enter the number:"))
var c=require("readline-sync")
function showNumbers(limit) {
var i=0
while (i<=limit){
    if (i%2===0){
        console.log(i,"even")}
    else{
        console.log(i,"odd")}
        i++
}}
showNumbers(limit=c.questionInt("inter te number"))