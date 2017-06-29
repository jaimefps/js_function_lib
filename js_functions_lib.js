// A. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Prime number tester et al.
function primeTester (n) {
  if(n < 2) return false;
  if(n === 2) return true;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false;
  }
  return true;
}

function primeSieve (start, end) {
  let primes = [];
  for(let i = start; i <= end; i++) {
    if(primeTester(i)) primes.push(i)
  }
  return primes;
}

// B. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Given a number of rounds n, 
// return all the possible rock-paper-scissors play possibilities 
// for that number of rounds.
function rockPaperPermutation (roundCount) {
  let results = [];
  let choices = ['r', 'p', 's'];
  if (roundCount) {
    var recurse = function(combo) {
      if (combo.length ===roundCount) {
        results.push(combo);
        return
      }
      for (var i= 0; i< choices.length; i++){
        recurse(combo +choices[i]);
      }
    }
    recurse('');
  }
  return results
}

// C. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Given an arbitrary input string, return the first non-repeating character. 
// For strings with all repeats, return 'sorry'.
function firstNonRepeatedCharacter (string) {
  var tracker = {};
  for(var i = 0; i < string.length; i++) {
    tracker[string[i]] = (tracker[string[i]] || 0) + 1
  }
  for (var key in tracker) {
    if(tracker[key] === 1) {
      return key;
    }
  }
  return 'sorry';
}

// D. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Make an array method that can return 
// whether or not a context array is a subset of an input array. 
// To simplify the problem, 
// you can assume that both arrays will contain only strings.
Array.prototype.isSubsetOf = function(arr2) {
  return this.every(x => arr2.indexOf(x) !== -1)
};

// F. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DO NOT use a recursive solution to this problem. 
// Your solution must run in linear time.
const nthFibonacci = function(n) {
  var a = 0; 
  var b = 1;
  for(let i = 0; i < n; i++) {
    var memo = b;
    b = a +b;
    a = memo;
  }
  return a;
}

// G. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// Write a function that accepts two strings as arguments, 
// and returns only the characters that are common to both strings.
// Your function should return the common characters in the same order 
// that they appear in the first argument. Do not return duplicate characters 
// and ignore whitespace in your returned string.
const commonCharacters = function(string1, string2){
  var compare = {};
  var singles = {};
  string2.split('').forEach(l => compare[l] = true);
  var commons = string1.split('').filter(l => compare[l] !== undefined);
  commons.forEach(l => singles[l] = true);
  return Object.keys(singles).join('').split(' ').join('');
};

// H. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// bubble-sort
const bubbleSort = function(array) {
  var copy = array.slice();
  for(let k = 0; k < array.length-1; k++) {
    for(let i = 0 ; i < copy.length-k; i++) {
      if(copy[i] > copy[i+1]) {
        var memo = copy[i+1];
        copy[i+1] = copy[i];
        copy[i] = memo;
      }
    }
  }
  return copy;
};

// I. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
