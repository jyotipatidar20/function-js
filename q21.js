var c=require("readline-sync")
function func(a){
var rev=0
while (a>0){
    rev=(rev*10)+a%10
    a=Math.floor(a/10)
}
console.log(rev)
}
func(a=c.question("enter the number"))
