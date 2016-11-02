function countLetters(input) {

// var noSpaces = input.split(" ").join("");

var string = input.replace(/ /, "")

var object = {};

for(var i = 0; i <= string.length - 1; i++) {

  object[string[i]] = 0;

}
for(var i =0; i< string.length; i++) {
  object[string[i]] += 1
}
return object;
};

console.log(countLetters("Lighthouse Labs"));
