# Create an animal

We want to create many animals, all with a different
name and species. Create a constructor function,
factory function, and class that can all be used
to create an animal.

Each class should also include a method that allows
the animal to say a greeting with their name and
species.

Test that all three implementation behave the same.

1. Create an `AnimalConstructor` constructor function
  * The function should take two parameters: name and
    species
  * A `greeting` method should be attached to the
    functions prototype
  * `greeting` should return a string
1. Create an `AnimalFactory` factory function
  * The factory function return an object
    representation of an animal and take two
    parameters: name and species
  * A `greeting` method should be included in the
    returned object
  * `greeting` should return a string
1. Create an `AnimalClass` class
  * The class's constructor should take two
    parameters: name and species
  * A `greeting` method should be defined
  * `greeting` should return a string
