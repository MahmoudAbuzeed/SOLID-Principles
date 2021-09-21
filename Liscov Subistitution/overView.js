/*
LISKOV SUBSTITUTION PRINCIPLE (LSP)

Derived classes must be substitutable for their base classes.
Or
All derivatives must conform to the behavior that clients expect of the base classes that they use.
This principle simply requires that every derived class should be substitutable for its parent class.
It extends the Open/Closed principle and enables you to replace objects of a parent class with objects of a subclass without breaking the application. 
What is wanted here is something like the following substitution property: if for each object O1 of type S there is an object O2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when O1 is substituted for O2 then S is a subtype of T.
Following this principle helps to avoid unexpected consequences of changes and avoids having to open a closed class in order to make changes. It leads to easy extensions of software, and, while it might slow down the development process, following this principle during development can avoid lots of issues during updates and extensions.

In the other context we can say that :
Methods of a subclass that override methods of a base class must have exactly the same number of arguments.
Each argument of the overridden method must be the same type as the method of the base class.
The return type of the overridden method must be the same as the method of the base class.
The types of exceptions thrown from the overridden method must be the same as the method of the base class.

The Penguin Class violates the LSP rules:

- The overridden fly method does not have the same number of arguments.
- The return type of the fly method is not the same.
- The types of exceptions thrown are not the same.
*/
