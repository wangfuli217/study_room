class Test
{
public:
    // virtual void aa() const;  // compile error
    virtual void aa() const = 0;
    ~Test() {}
};

class SubTest : public Test
{
public:
    virtual void aa() const;
};

void SubTest::aa() const
{
}

int main()
{
    SubTest s;
}
