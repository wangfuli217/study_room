#include <iostream>
#include <string>
#include <vector>
using namespace std;

void removeEmptyStrings(vector<string>& strings)
{
    auto it = remove_if(strings.begin(), strings.end(),
                        [](const string& str){return str.empty();});
    strings.erase(it,strings.end());
}

int main()
{
    vector<string> myVector = {"", "one", "", "two", "three", "four"};
    cout << "size : " << myVector.size() << " :: ";
    for(auto& str : myVector) cout << "\"" << str << "\" ";
    cout << endl;

    removeEmptyStrings(myVector);
    cout << "size : " << myVector.size() << " :: ";
    for(auto& str : myVector) cout << "\"" << str << "\" ";
    cout << endl;
    
    return 0;
}
