function check_numbers_list(a,b) {
     var i=0
    while (i<a.length){
        if (a[i]%2===0 && b[i]%2===0){
            console.log("both list are divisible")
        }else{
            console.log("not divisible")}
    i=i+1
}}
check_numbers_list([2, 6, 18, 10, 3, 75] , [6, 19, 24, 12, 3, 87])
