//Question 1: Ages Array

let ages = [3,9,23,64,2,8,28,93];

const lastItem = ages[ages.length - 1];
console.log("Question 1a:", (lastItem-ages[0]));

function findAverage(ages) {
    let total = 0;

    for (i = 0; i < ages.length; i++) {
        total += ages[i];
    }
    return total / ages.length;
}

//Question 1b:

ages.push(99);

//Question 1c:

let averageOfAges = findAverage(ages);
console.log("Question 1c:", averageOfAges);

//Question 2: Names Array

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

//Question 2a:

function findLength(names) {
    let total = 0;
    for (i = 0; i < names.length; i++) {
        total += names[i].length;
    }
    return total / names.length;
}
let averageOfNames = findLength(names);
console.log("Question 2a:", averageOfNames);

//Question 2b:

function concatNames(names) {
    let total = '';
    for (i = 0; i < names.length; i++) {
        total += names[i];
        total += ' ';
    }
    return total;
}
let stringNames = concatNames(names);
console.log("Question 2b:", stringNames);

//Question 5: nameLengths Array 

function simplify(names) {
    let total = [];
    
    for (i = 0; i < names.length; i++) {
        total.push(names[i].length);
    }
    return total;
}
let nameLengths = simplify(names);
console.log("Question 5:", nameLengths);

//Question 6:

function nameLengthsSum(nameLengths) {
    let sum = 0;
    for (i = 0; i < nameLengths.length; i++) {
        sum += nameLengths[i];
    }
    return sum;
}
let ageSum = nameLengthsSum(nameLengths);
console.log("Question 6:", ageSum);


//Question 7:

function repitition (word, n) {
      return word.repeat(n);
}
console.log("Question 7:", repitition("Hello", 3))

//Question 8:

function fullName (firstName, lastName) {
    return firstName + " " + lastName;
}
console.log("Question 8:", fullName ("Geralt", "Rivea"));


//Question 9:

function sumFunction (ages) {
    let total = 0;
    if (total > 100) {
        total += ages[i]
        return true;
    }
    else {
        return false;
    }
}
console.log("Question 9:", sumFunction(ages));

//Question 10:

function avgAges(ages) {
    let total = 0;
    for (i = 0; i < ages.length; i++) {
        total += ages[i];
    }
    return total / ages.length;
}
let avgOfAges = avgAges(ages);
console.log("Question 10:", avgOfAges);

//Question 11: -- not done
 
let exp1 = [32, 34, 78, 2, 10]
let exp2 = [11, 99, 22, 5, 100]

 function twoArrays (exp1, exp2) {
    let total1 = 0;
    let total2 = 0;

    for (i = 0; i < exp1.length; i++) {
        total1 += exp1[i];
    }
    for (j = 0; j < exp2.length; j++) {
        total2 += exp2[j];
   }
   return total1/exp1 > total2/exp2;
   }
console.log("Question 11:", twoArrays(exp1, exp2))
 
 
//Question 12

 function willBuyDrink (isHotOutside, moneyInPocket) {
    if(isHotOutside === true && moneyInPocket > 10.50) {
        return true
    }
    else {
        return false
    }
}
 console.log("Question 12:", willBuyDrink(true, 10));


 //Question 13
 //This problem is to decide if my son is allowed to play Minecraft after school. 
 //If his bed was made and teeth were brushed before school as well as at least 15 minutes of Lexia or Splash Math and he can play Minecraft until dinner.

function minecraft (t, b, h) {
    if (t === true && b === true && h === true) {
        return "You can play Minecraft until dinner.";
    }
    else {
        return "You can not play Minecraft today.";
    }
}
console.log("Question 13:", minecraft(true, true, false));