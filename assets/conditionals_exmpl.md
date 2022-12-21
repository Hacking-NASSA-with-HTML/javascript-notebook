Change the values of 'balance', 'checkBalance', and 'isActive' to test your code

```js
let balance = 725.065
let checkBalance = true
let isActive = true
```

Starts only if checkBalance === true :

```js
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $ " + balance.toFixed(2) + ".")
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.")
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.")
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.")
    }  
} 
else {
  console.log("Thank you. Have a nice day!")
}
```

Example 2:

```js
let flavor = "chocolate"
let vessel = "cone"
let toppings = "sprinkles"
```

console.logging only if all below is true:

```js
if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".")
}
```

Example 3:

```js
let shirtWidth = 23 // prints size L (large)
let shirtLength = 30 // prints size L (large)
let shirtSleeve = 8.71 // prints size L (large)

let size = "find"
```

console.logging size:

```js
if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S"
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M"
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L"
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL"
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL"
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL"
}
else {
    size = "Who r u?"
}
console.log(size)
```