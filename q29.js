function calculateCasing(str){
var upperCount = 0; 
var lowerCount = 0; 
for(let i=0; i<str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            upperCount++;}    
        if(str[i] == str[i].toLowerCase()){
            lowerCount++;}      
    }
// console.log("Original string = " + str);
console.log("Upper case characters  = " + upperCount);
console.log("Lower case characters = " + lowerCount);
}
calculateCasing("ThequickBrowFox")