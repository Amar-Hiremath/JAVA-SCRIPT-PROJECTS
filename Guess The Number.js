/* Write a java-script program to generate a random number and store it in a variable. the program then takes an input from the user to tell them whether the guess
was correct, greater or less than the original number. out of 100 - (no of guesses) is the score of the user. the program is expected to terminate once the number is gussed.
Number shoould be between 1-100
 */
 
let a = Math.floor((Math.random() * 100))

for(i = 0 ; i <100 ; i++) {

b = prompt("Enter the Number");
b = Number.parseInt(b);
if(b>a){
  console.log("guess a smaller number")
}
else if (b<a){
  console.log("guess a greater number")
}
else if (a=b){
  console.log("Your score out of 100  is ="+ (100-i))
  console.log("You guessed the right number")
  break
}
}
  console.log("Game Over")
