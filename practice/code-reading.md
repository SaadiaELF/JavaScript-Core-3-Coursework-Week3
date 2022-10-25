# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
- The line 4 print the variable inside the scope (2) when the function is called
- The line 6 print the variable in the global scope because the inner variable is not accessible (1)
## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
- `console.log(f1())` will print 10 taking the value from the global scope
- `console.log(y)` will print undefined because the variable is inside the function scope and the console.log() is outside the function scope
## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x); 

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y); 
```

What will be the output of this code. Explain your answer in 50 words or less.
- `console.log(x)` will print 9 because x is a constant
- `console.log(y)` will print `y = { x: 10 }` because objects are mutable;
