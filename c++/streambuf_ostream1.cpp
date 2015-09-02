#include <fstream>
#include <iostream>

class teebuf:public std::streambuf
{
private:
    std::streambuf * m_sb1;
    std::streambuf * m_sb2;

public:
    teebuf(std::streambuf * sb1, std::streambuf * sb2):m_sb1(sb1),m_sb2(sb2) {}
    typedef std::char_traits<char> traits_type;
    typedef traits_type::int_type int_type;
    int_type overflow(int_type c)
    {
	if(m_sb1->sputc(c) == traits_type::eof()
        || m_sb2->sputc(c) == traits_type::eof())
	{
	    return traits_type::eof();
	}
	return c;
    }

    int sync()
    {
	int temp1 = m_sb1->pubsync();
	int temp2 = m_sb2->pubsync();

	return 0;
    }
};

int main()
{
    std::ofstream logfile("log.txt");
    teebuf buf(std::cout.rdbuf(), logfile.rdbuf());
    std::ostream log(&buf);

    log << "hong kil dong" << 1123 << std::endl;
    log << "im kkuk jung" << 1123 << std::endl;
    log << "hong kyung lae" << 1123 << std::endl;

    return 0;
}
