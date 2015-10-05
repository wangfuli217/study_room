#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> myVector;
    for(int i=0; i<10; ++i)
    {
        myVector.push_back(i);
    }

    copy(myVector.begin(), myVector.end(), ostream_iterator<int>(cout," "));
}
