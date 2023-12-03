var flag = 1;
var num = 101;
for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
        flag = 0;
        break;
    }
}
if (flag) {
    console.log(num + " Number is Prime.....\n");
}
else {
    console.log(num + " Number is not Prime.....\n");
}
