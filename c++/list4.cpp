#include <iostream>
#include <list>
using namespace std;

int main()
{
    list<string> dictionary, bWords;
    dictionary.push_back("aardvark");
    dictionary.push_back("ambulance");
    dictionary.push_back("canticle");
    dictionary.push_back("consumerism");

    bWords.push_back("bathos");
    bWords.push_back("balderdash");

    dictionary.merge(bWords);

    cout << "dictionary : " << endl; 
    for(auto& i : dictionary) cout << i << " ";
    cout << endl;

    dictionary.reverse();

    cout << "dictionary : " << endl; 
    for(auto& i : dictionary) cout << i << " ";
    cout << endl;

    return 0;
}
