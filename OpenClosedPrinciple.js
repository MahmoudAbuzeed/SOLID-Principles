/*
Open-Closed Principle

You should be able to extend a class’s behavior without modifying it.
The idea of open-closed principle is that existing, well-tested classes will need to be modified when something needs to be added.
Changing classes can lead to problems or bugs, instead of changing the class, you simply want to extend it.
Following this principle is essential for writing code that is easy to maintain and revise. Your class complies with this principle if it is:
- Open for extension, meaning that the class’s behavior can be extended.
- Closed for modification, meaning that the source code is set and cannot be changed.

Let's say we have a web app that needed the functionality to convert from decimal to binary numbers.
We could implement a class like the DecimalToBinary class in the example above.
But what would happen if we suddenly need to also convert binary numbers to decimal numbers, or decimal to hexadecimal and so on?
To do so, we would most likely modify the DecimalToBinary class. This would violate the Open-Closed Principle.
*/

// Bad example
class DecimalToBinary {
  dec2bin(number) {
    console.log(parseInt(number, 10).toString(2));
  }
}

const binary1 = new DecimalToBinary();
binary1.dec2bin(10); // 1010

// Good example
class NumberConverter {
  convertBase(number, fromBase, toBase) {
    return parseInt(number, fromBase).toString(toBase);
  }
}

class DecimalToBinary1 extends NumberConverter {
  dec2bin(number) {
    console.log(this.convertBase(number, 10, 2));
  }
}

class BinaryToDecimal extends NumberConverter {
  bin2dec(number) {
    console.log(this.convertBase(number, 2, 10));
  }
}

const binary = new DecimalToBinary1();
binary.dec2bin(5); // 101
const decimal = new BinaryToDecimal();
decimal.bin2dec(101); // 5
