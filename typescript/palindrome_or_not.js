var words = "wow";
var newWord = "";
for (var i = words.length - 1; i >= 0; i--) {
    newWord += words.charAt(i);
}
console.log(newWord);
if (newWord == words) {
    console.log("Give word " + words + " is palindrome!");
}
else {
    console.log("Give word " + words + " is not palindrome!");
}
