Change the values of 'balance', 'checkBalance', and 'isActive' to test your code

```js
let balance = 725.065
let checkBalance = true
let isActive = true
```

Start only if checkBalance === true

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