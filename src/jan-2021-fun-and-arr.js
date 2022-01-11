//Iteration 1:
function maxOfTwoNumbers (num1,num2) {
    return num1 > num2 ? num1 : num2;
}

maxOfTwoNumbers(1,3);

//Iteration 2:
function findLongestWord (arrOfWords) {
    let longestWord = "";
    for (word of arrOfWords) {
        if (word.length > longestWord.length) {
            longestWord = word;
        } else {
            longestWord
        }
    }
    return longestWord;
}

//Iteration 3:
function sumNumbers(arrOfNumbers) {
    let sumOfNumbers = 0;
    for (number of arrOfNumbers) {
        sumOfNumbers += number
    }
    return sumOfNumbers;
}

//Iteration 3 - bonus:
function sum(mixedArr) {
    let countIntegers = 0;
    let countStrings = 0;
    let countBoolean = 0;
    for (element of mixedArr) {
        if (typeof element === "number") {
          countIntegers += element
        }
        if (typeof element === "string") {
          countStrings += element.length
        }
        if (typeof element === "boolean" && element===true) {
          countBoolean += 1 //TODO: coerce boolean to numeric value
        }
    }
    return countIntegers + countBoolean + countStrings
}

//Iteration 4:
//Iteration 4: Level 1
function calculateAverage (arrOfNumbers) {
    return sumNumbers(arrOfNumbers) / arrOfNumbers.length;
}

//Iteration 4: Level 2
function averageWordLength (arrOfWords) {
    let sum = 0;
    for (word of arrOfWords) {
        sum += word.length;
    }
    return sum/arrOfWords.length
}

//Iteration 4: Bonus - a generic avg() function
function avg(arr) {
    return sum(arr)/arr.length;
}

//Iteration 5:
function uniquifyArray(arrOfWordsToUniquify) {
    let newArr = [];
    for (let word of arrOfWordsToUniquify) {
      if (!arrOfWordsToUniquify.includes(word)) {
        newArr.push(word);
      }
    }
    return newArr;
}

//or
function uniquifyArray2(arrOfWordsToUniquify) {
    let newArr = [];
    for (let i = 0; i < arrOfWordsToUniquify.length; i++) {
        if (arrOfWordsToUniquify.indexOf(arrOfWordsToUniquify[i]) === -1) {
            newArr.push(arrOfWordsToUniquify[i]);
        }
    }
    return newArr;
}

//Iteration 6:
function doesWordExist (arrOfWords, wordToFind) {
   return arrOfWords.includes(wordToFind) ? true : false
}

//Iteration 7:
function howManyTimes (arrOfWords, wordToFind) {
    let sum = 0;
    for (word of arrOfWords) {
        if (word === wordToFind) {
            sum++
        }
    }
    return sum;
}