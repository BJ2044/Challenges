// Write a function that takes a word and a number and outputs that word that numbers of times  
function repeatWord (word, num){
    for(let i = num; i >= 1; i--) {
      console.log(word);
    }
  }
  const word = 'Hello'
  repeatWord(word, 5)