var num = 5;
var fact = 1;
if (num < 0) {
    console.log("it's a negative number please input positive number only !\n");
}
else {
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Given number is  " + num + " and it's factorial is" + fact + "\n");
}
