function func(){
var i=1
var sum=0
while (i<=10){
if (i%3==0 || i%5==0)
    console.log(i)
    sum=sum+i

    i=i+1

console.log("multiple of sum",sum)
}}
func()
