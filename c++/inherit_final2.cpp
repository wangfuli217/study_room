class Super
{
public:
    Super() {}
    virtual void someMethod() final;
};

class Sub : public Super
{
public:
    Sub() {}
    virtual void someMethod();  // compile error
};

void Super::someMethod()
{
}

void Sub::someMethod()
{
}

int main()
{
    return 0;
}
