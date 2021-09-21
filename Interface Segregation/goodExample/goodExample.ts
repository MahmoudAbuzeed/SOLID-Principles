// The Good Example
// Here we apply the ISP and we separate the single ISmartDevice interface into three smaller interfaces: IPrinter, IFax, and IScanner.

interface IPrinter {
  print(model: string, price: number): string;
}

interface IFax {
  fax(): string;
}

interface IScanner {
  scan(): string;
}

class AllInOnePrinter implements IPrinter, IFax, IScanner {
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
const device = new AllInOnePrinter("Printer", 2000);
console.log(device.print("Printer", 2000)); // Device model is printer, and it's price 2000
console.log(device.fax()); // Sorry, I cant fax

class EconomicPrinter implements IPrinter {
  model: string;
  price: number;
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
  print(model: string, price: number) {
    return `Device model is ${model}, and it's price ${price}`;
  }
}
const economicPrinter = new EconomicPrinter("printer1", 1000);
console.log(economicPrinter.print("Printer1", 1000)); // Device model is realme, and it's price 2000
