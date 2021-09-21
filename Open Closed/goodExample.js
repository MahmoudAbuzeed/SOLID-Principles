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
