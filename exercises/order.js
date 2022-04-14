/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words) {
    let words_list = words.split(' ')
    const dictionary = {}
    let sorted = []

    for (let i = 0; i < words_list.length; i++) {
        let i_word = words_list[i]
        console.log(i_word)
        for (let j = 0; j < i_word.length; j++) {

            if (!isNaN(parseFloat(i_word[j])) && isFinite(i_word[j])) {
                console.log('Искомое', i_word[j], typeof(i_word[j]))
                dictionary[Number(i_word[j]) - 1] = i_word
            }
        }
    }
    for (let j = 0; j < words_list.length; j++) {
        sorted[j] = dictionary[j]
    }
    return sorted.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))

//теперь верно
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))

// решение через регулярное выражение
/*
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
*/
