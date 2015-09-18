// expert c++ 9.5.1

void func(int i)
{
}

int main()
{
    int x = {3.14}; // compile error
    func({3.14});   // compile error

    return 0;
}
