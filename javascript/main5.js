// SELFWORK FUNZIONI 4

function isPalindrome(str) {
    
    let cleanedStr = str.replace(/\W/g, "").toLowerCase();
    
    
    let reversedStr = cleanedStr.split("").reverse().join("");
    
    return cleanedStr == reversedStr;
}


let input = "i topi non avevano nipoti";
console.log(isPalindrome(input)); 
