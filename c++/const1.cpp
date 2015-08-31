#include <iostream>

class TextBlock
{
public:
    TextBlock(std::string s):text(s) {}

    const char& operator[](std::size_t position) const
	{
	    return text[position];
	}

    char& operator[](std::size_t position)
	{
	    return text[position];
	}

private:
    std::string text;
};

int main()
{
    TextBlock tb("Hello");
    std::cout << tb[0];

    const TextBlock ctb("World");
    std::cout << ctb[0];

    std::cout << tb[0];
    tb[0] = 'x';

    std::cout << ctb[0];
    //ctb[0] = 'x';
}
