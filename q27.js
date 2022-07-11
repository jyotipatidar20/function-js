var c=require("readline-sync")
function vote(num){
    if (num>=18){
        console.log("eligible for vote:")
    }else{
        console.log("not eligible for vote:")
    }
}
vote(num=c.questionInt("inter the age:"))