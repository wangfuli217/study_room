#include <iostream>
#include <fstream>
#include <string>
#include <regex>
using namespace std;

int main()
{
    ifstream ifs("in.txt");
    string total;
    regex pat(R"([a-z,A-Z]*oo[a-z,A-Z]*)");

    int lineno = 0;
    smatch matches;

    for(string line; getline(ifs,line);)
    {
	++lineno;
	if(regex_search(line,matches,pat))
	    cout << lineno << ":" << matches[0] << endl;
	line.append("\n");
	total.append(line);
    }

    cout << "total : ========" << endl << total << endl;

    return 0;
}
