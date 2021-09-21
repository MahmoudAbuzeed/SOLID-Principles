var AllInOnePrinter = /** @class */ (function () {
    function AllInOnePrinter(model, price) {
        this.model = model;
        this.price = price;
    }
    AllInOnePrinter.prototype.print = function (model, price) {
        return "Device model is " + model + ", and it's price " + price;
    };
    AllInOnePrinter.prototype.fax = function () {
        return "fax code here";
    };
    AllInOnePrinter.prototype.scan = function () {
        return "scanning code here";
    };
    return AllInOnePrinter;
}());
var device = new AllInOnePrinter("Printer", 5200);
console.log(device.print("Printer", 5200)); // Device model is Sam, and it's price 5200
console.log(device.fax()); // fax code here
/* Now suppose we need to handle a dumb device (EconomicPrinter class) that can only print.
We're forced to implement the Whole interface, for example: */
var EconomicPrinter = /** @class */ (function () {
    function EconomicPrinter(model, price) {
        this.model = model;
        this.price = price;
    }
    EconomicPrinter.prototype.print = function (model, price) {
        return "Device model is " + model + ", and it's price " + price;
    };
    EconomicPrinter.prototype.fax = function () {
        return "Sorry, I cant fax";
    };
    EconomicPrinter.prototype.scan = function () {
        return "Sorry, I cant scan";
    };
    return EconomicPrinter;
}());
var economicDevice = new EconomicPrinter("Printer1", 2000);
console.log(economicDevice.print("Printer1", 2000)); // Device model is realme, and it's price 2000
console.log(economicDevice.fax()); // Sorry, I cant fax
