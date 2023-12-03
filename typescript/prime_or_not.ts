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