interface ISmartDevice {
  model: string;
  price: number;
  print(model: string, price: number): string;
  fax(): string;
  scan(): string;
}
class AllInOnePrinter implements ISmartDevice {
  model: string;
  price: number;
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  print(model: string, price: number) {
    return `Device model is ${model}, and it's price ${price}`;
  }
  fax() {
    return "fax code here";
  }
  scan() {
    return "scanning code here";
  }
}
const device = new AllInOnePrinter("Printer", 5200);
console.log(device.print("Printer", 5200)); // Device model is Sam, and it's price 5200
console.log(device.fax()); // fax code here

/* Now suppose we need to handle a dumb device (EconomicPrinter class) that can only print.
We're forced to implement the Whole interface, for example: */

class EconomicPrinter implements ISmartDevice {
  model: string;
  price: number;
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  print(model: string, price: number) {
    return `Device model is ${model}, and it's price ${price}`;
  }
  fax() {
    return "Sorry, I can not fax";
  }
  scan() {
    return "Sorry, I can not scan";
  }
}
const economicDevice = new EconomicPrinter("Printer1", 2000);
console.log(economicDevice.print("Printer1", 2000)); // Device model is realme, and it's price 2000
console.log(economicDevice.fax()); // Sorry, I cant fax
