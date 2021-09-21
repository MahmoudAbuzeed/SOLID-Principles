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
