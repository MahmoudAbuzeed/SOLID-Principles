/*
Interface Segregation Principle (ISP)


Avoid fat interface.
Make fine grained interfaces that are client-specific, Clients should not be forced to implement interfaces they do not use
The general idea of interface segregation principle is that it’s better to have a lot of smaller interfaces than a few bigger ones.
This means that you don’t want to just start with an existing interface and add new methods.
Instead, start by building a new interface and then let your class implement multiple interfaces as needed.
Smaller interfaces mean that we should have a preference for composition over inheritance and for decoupling over coupling.
According to this principle, we should work to have many client-specific interfaces, avoiding the temptation of having one big, general-purpose interface.

*/
// // The Bad Example
// // Here we examine an interface that violates ISP:
// interface ISmartDevice {
//   model: string;
//   price: number;
//   print(model: string, price: number): string;
//   fax(): string;
//   scan(): string;
// }
// class AllInOnePrinter implements ISmartDevice {
//   model: string;
//   price: number;
//   constructor(model, price) {
//     this.model = model;
//     this.price = price;
//   }
//   print(model: string, price: number) { return `Device model is ${model}, and it's price ${price}` }
//   fax() { return "fax cade here" }
//   scan() { return "scanning code here" }
// }
// const device = new AllInOnePrinter("Printer", 5200);
// console.log(device.print("Printer", 5200)); // Device model is Sam, and it's price 5200
// console.log(device.fax()); // fax cade here

// /* Now suppose we need to handle a dumb device (EconomicPrinter class) that can only print.
// We're forced to implement the Whole interface, for example: */

// class EconomicPrinter implements ISmartDevice{
//      model: string;
//      price: number;
//      constructor(model, price) {
//        this.model = model;
//        this.price = price;
//      }
//      print(model: string, price: number) { return `Device model is ${model}, and it's price ${price}` }
//      fax() { return "Sorry, I cant fax"}
//      scan() {  return  "Sorry, I cant scan" }
// }
// const economicDevice = new EconomicPrinter("Printer1", 2000);
// console.log(economicDevice.print("Printer1", 2000)); // Device model is realme, and it's price 2000
// console.log(economicDevice.fax()); // Sorry, I cant fax

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
  print(model: string, price: number) { return `Device model is ${model}, and it's price ${price}` }
  fax() { return "Sorry, I cant fax" }
  scan() { return "Sorry, I cant scan" }
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
  print(model: string, price: number) { return `Device model is ${model}, and it's price ${price}` }
}
const economicPrinter = new EconomicPrinter("printer1", 1000);
console.log(economicPrinter.print("Printer1", 1000)); // Device model is realme, and it's price 2000

