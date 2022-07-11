function func(...n){
    i=0
    b=[]
    while(i<n.length){
        if(!b.includes(n[i])){
            b.push(n[i])
        }
        i++
    }
    console.log(b)
}
func(1,2,3,3,3,3,4,5)


