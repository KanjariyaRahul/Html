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

