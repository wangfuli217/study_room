#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> myVector = {99,22,33,59,68,100,38,95};

    auto end = myVector.end();
    auto it = find_if(myVector.begin(), end,
                      bind(greater_equal<int>(), placeholders::_1, 100));
    if(it == end)
    {
        cout << "No perfect scores" << endl;
    }
    else
    {
        cout << "Found a \"perfect\" score of " << *it << endl;
    }
}
