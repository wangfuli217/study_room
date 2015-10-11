
class NonCopyable
{
protected:
    NonCopyable() {}

private:
    NonCopyable(const NonCopyable& a);
    NonCopyable& operator=(const NonCopyable& a);
};

class Derived : NonCopyable
{
};

int main()
{
    Derived temp;
}
