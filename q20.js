var c=require ("readline-sync")
function func(a){
var i=0
string=" "
while (i<a.length){
    string=string+(a.toUpperCase()[i])
    if (a!=a.length){
        string=string+" _"
    string=string+(a.toLowerCase()[i])
    i=i+1
}}}
func( a=c.question("inter the number"))
console.log(string)