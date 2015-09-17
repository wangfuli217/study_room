#include <iostream>
using namespace std;

class Animal
{
public:
    virtual void eat() = 0;
};

class Dog : public Animal
{
public:
    virtual void bark() { cout << "Woof!" << endl; }
    virtual void eat() { cout << "The dog has eaten." << endl; }
};

class Bird : public Animal
{
public:
    virtual void chirp() { cout << "Chirp!" << endl; }
    virtual void eat() { cout << "The bird has eaten." << endl; }
};

class DogBird : public Dog, public Bird
{
public:
    // virtual void eat() { eat(); }  // implicit -> segment fault
    virtual void eat() { Dog::eat(); Bird::eat(); }
};

int main()
{
    DogBird confuse;
    confuse.eat();

    return 0;
}
