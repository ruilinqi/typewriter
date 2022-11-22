const sentence = "hello there from lighthouse labs";
const timer = 50;
//console.log(char);
// setTimeout(() => {
//     for (let char of sentence) {
//     process.stdout.write(char); // Print out without newline character, in a single line
//   }
// }, 1000)

const addChar = (sentence, timer) => {
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char), timer}
      , 
      timer += 50)
  }
}
addChar(sentence, timer);


