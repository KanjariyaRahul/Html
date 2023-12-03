//  ------------------------------------ 1 palindrome or not ---------------------------

var words = "wow";
var newWord = "";

for(var i=words.length-1; i>=0; i--){
    newWord += words.charAt(i);
}
console.log(newWord);

if(newWord == words)
{
    console.log("Give word " + words + " is palindrome!");
}
else{
    console.log("Give word " + words +  " is not palindrome!");
}

//  ------------------------------------ 2. prime or not ---------------------------

var flag = 1;
var num = 97;

for(var i=2; i<=num/2; i++)
{
    if(num % i == 0){
        flag = 0 ;
        break;
    }
}

if(flag){
    console.log(num + " Number is Prime.....");
}
else{
    console.log(num + " Number is not Prime.....");
}


//  ------------------------------------ 3. factorial number --------------------------------

var num=5;
var fact= 1;

if(num < 0)
{
    console.log("it's a negative number please input positive number only !\n");
}
else{
    for(var i=1; i<=num; i++){
        fact*= i;
    }
    console.log("Given number is  "+ num  + " and it's factorial is : " +  fact  + "\n");
}


//  ------------------------------------ 4. fibonacci series --------------------------------

var term1=0 ,term2=1;
var nextterm = 0;
var num = 10;

console.log("Fibonacci Series\n\n"+ term1 + "\n\n" + term2)

for(var i=2; i<=num; i++)
{
    nextterm = term1 + term2;
    console.log("\n"+nextterm);
    term1 = term2;
    term2 = nextterm;
}


//  ------------------------------------ 5. leap year or not  --------------------------------

var words = "wow";
var newWord = "";

for(var i=words.length-1; i>=0; i--){
    newWord += words.charAt(i);
}
console.log(newWord);

if(newWord == words)
{
    console.log("Give word " + words + " is palindrome!");
}
else{
    console.log("Give word " + words +  " is not palindrome!");
}

