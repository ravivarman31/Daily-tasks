function largestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log("Largest Number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("Largest Number is: " + num2);
    } else {
        console.log("Largest Number is: " + num3);
    }
}


largestNumber(10, 25, 15);