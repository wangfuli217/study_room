class Test
{
public:
    Test() {}
    Test(double d):Test('s') {}
    Test(char c):Test(1.0) {}
};

int main()
{
    Test t;
}
