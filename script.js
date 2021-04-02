// 1. Convert boolean values to strings 'Yes' or 'No'
function boolToWord(bool) {
    return bool ? "Yes" : "No";
}

// 2. Over The Road
/* 
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road.
Naturally, you would like to find out the house number of the people on the other side of the street. 
The street looks something like this:
1|  |6
3|  |4
5|  |2
Evens increase on the right; odds decrease on the left. 
House numbers start at 1 and increase without gaps. 
When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2. 
*/

function overTheRoad(address, n) {
    return 1 + n*2 - address;
}

// 3. 1/n- Cycle
/*
Let be n an integer prime with 10 e.g. 7.

1/7 = 0.142857 142857 142857 ....

We see that the decimal part has a cycle: 142857. 
The length of this cycle is 6. In the same way:

1/11 = 0.09 09 09 .... Cycle length is 2.

Task
Given an integer n (n > 1) the function cycle(n) returns the length 
of the cycle if there is one otherwise (n and 10 not coprimes) 
return -1.
Examples:

cycle(5) = -1
cycle(13) = 6 -> 0.076923 076923 0769
cycle(21) = 6 -> 0.047619 047619 0476
cycle(27) = 3 -> 0.037 037 037 037 0370
cycle(33) = 2 -> 0.03 03 03 03 03 03 03 03
cycle(37) = 3 -> 0.027 027 027 027 027 0
cycle(94) = -1 

Notes
    cycle(22) = -1 since 1/22 ~ 0.0 45 45 45 45 ...
    This example shows decimal part that has no repeating cycle we want.
*/

function cycle(n) {
    if (n % 2 === 0 || n % 5 === 0) {
        return -1;
    }

    let counter = 0;
    let divisor = 1;

    while(++counter) {
        divisor = divisor * 10 % n;
        if (divisor === 1) {
            return counter;
        }
    }
}

// 4. Number of trailing zeros of N!
/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

function zeros(n) {
    const kmax = Math.log(n)/Math.log(5);   // log a(b) = log(b)/log(a)
    let sum = 0;

    for (let k=1; k<=kmax; k++) {
        sum += Math.floor(n/Math.pow(5, k));    // formula from wolfram
    }

    return sum;
}

// 5. Sort and Star
/*
You will be given a vector of strings. 
You must sort it alphabetically 
(case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

Example
["take", "over", "the", "world", "maybe", "bitcoin", "who", "knows", "perhaps"] => 'b***i***t***c***o***i***n'
*/

function twoSort(s) {
    return s.sort()[0].split("").join("***");
}
