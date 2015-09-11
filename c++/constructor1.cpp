class Test
{
public:
    Test() = default; 
    Test(int n) : v(n) { }
private:
    int v;
};

int main()
{
    Test t;
}
