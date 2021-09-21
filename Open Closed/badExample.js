// Bad example
class DecimalToBinary {
  dec2bin(number) {
    console.log(parseInt(number, 10).toString(2));
  }
}

const binary1 = new DecimalToBinary();
binary1.dec2bin(10); // 1010
