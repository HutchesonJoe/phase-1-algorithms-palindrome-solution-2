function isPalindrome(word) {
  for (let i=0; i < word.length/2; i++){
    const j = word.length - 1 - i;
    const startChar = word[i]
    const endChar = word[j]
    if (startChar !== endChar) return false;
  }
 return true
}

/* 
iterate from the beginning the middle of the words; 

  if any letters don't match
    return false
  
  if letters match
    return true
*/

/*
Write a function that returns "true" is word is a palindrome.*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
