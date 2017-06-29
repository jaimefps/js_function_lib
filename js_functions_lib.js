// 1. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// 2. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// 3. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// 4. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Make an array method that can return 
// whether or not a context array is a subset of an input array. 
// To simplify the problem, 
// you can assume that both arrays will contain only strings.
Array.prototype.isSubsetOf = function(arr2) {
  return this.every(x => arr2.indexOf(x) !== -1)
};

// 5. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// 6. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
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

// 7. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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

// 8. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Implement a depth-first method on a tree class.
// DFSelect accepts a filter function, 
// calls that function on each of the nodes in Depth First order, 
// and returns a flat array of node values of the tree 
// for which the filter returns true.
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.DFSelect = function(filter) {      
  var result = [];
  
  (function subroutine(node, depth) {
    if(filter(node.value, depth)){
      result.push(node.value);
    }
    for(let i = 0; i < node.children.length; i++) {
      subroutine(node.children[i], depth+1);
    }
  })(this, 0);
  
  return result;
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

// 9. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function that accepts an array of integers 
// and returns the largest product possible from three of those numbers.
function largestProductOfThree (array) {
 var copy = array.sort((x,y)=>x-y);
 var option1 = copy[0]*copy[1]*copy[copy.length-1];
 var option2 = copy[copy.length-3]*copy[copy.length-2]*copy[copy.length-1];
 return option1 > option2 ? option1 : option2;
}

// 10. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// deep equals for object literal
deepEquals = function(a, b){
  if(typeof a !== "object"){
  	return a === b;	
  } 

  if(Object.keys(a).length !== Object.keys(b).length ||
        typeof a !== typeof b ||
        Array.isArray(a) ^ Array.isArray(b)){
          
    return false;
  }
  
  for(let key in a){
    if(!deepEquals(b[key], a[key])){
      return false;
    }
    
  }
  return true;
};

// 11. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Implement the function ‘bind’, 
// which accepts a function and a context as arguments. 
// The context argument should override an existing context 
// that the function is defined in. 
// Your bind function should return the passed in function.
var bind = function(func, context){
 var prevArgs = Array.prototype.slice.call(arguments, 2);
 return function(){
  var args = Array.prototype.slice.call(arguments);
  args = prevArgs.concat(args);
  return func.apply(context, args) 
 }
}

Function.prototype.bind = function( context){
 var prevArgs = Array.prototype.slice.call(arguments, 1);
 var func = this;
  return function(){
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);
    return func.apply(context, args) 
  } 
}

// 12. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Return an array that contains the power set of a given string.
 const powerSet = (str) => {
  str = str || ''		
  var letters = {};
  
  for(var i = 0; i < str.length; i++){
	letters[str[i]] = true
  }
       
  str = Object.keys(letters).join('')

  var solutions = [];
  
  (function recurse(idx, subset){
    if ( idx >= str.length ) {
      solutions.push(subset);
      return;
    }

    recurse(idx+1, subset);          
    recurse(idx+1, subset+str[idx]);
  })(0, '');

  return solutions.sort();
};

// 13. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Implement the functions "compose" and "pipe"
const compose = (...args) => {
  return function (val) {
    return args.reduceRight((prev, next) => next(prev), val);
  }
}

const pipe = (...args) => {
  return function (val) {
    return args.reduce((prev, next) => next(prev), val);
  }
}

// 14. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// classic: balanced brakets
function isBalanced (string) {
    let parentheses = "[]{}()";
    let stack = [];
    let character, bracePosition;
  for(let i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);
    if(bracePosition === -1) {
      continue;
    }
    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// 15. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function that, given a string, 
// finds the longest run of identical characters 
// and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. 
// Return [0,0] for no runs.
function longestRun (string) {
  let curletter = '';
  let curstart = 0, laststart = 0;
  let curend = 0, lastend = 0;
  let curcount = 0, lastcount = 0; 
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== curletter) {
       if (curcount > lastcount) {
         laststart = curstart;
         lastend = curend;
         lastcount = curcount;
       }
       curletter = string[i];
       curstart = i;
       curend = i;
       curcount = 1;
    } else {
      curend = i;
      curcount++;
   }
  }
  if(curcount>lastcount) return [curstart, curend]
  return [laststart, lastend];
}

// 16. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Implement a function that sorts an array of numbers 
// using the “mergesort” algorithm.
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    var middle = parseInt(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}

// 17. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the first item that occurs an even number of times in an array.
function evenOccurrence (arr) {
  let answer = null
  for(let i = 0; i < arr.length; i++) {
    if(arr.filter(l => l === arr[i]).length % 2 === 0) {
      answer = arr[i];
      break;
    }
  };
  return answer;
}