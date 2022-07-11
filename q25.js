a=require("readline-sync")
function table(){
    i=0
    while(i<=10){
        console.log(num,"*",i,"=",num*i)
    i++
    }
}
table(num=a.questionInt("enter number"))

