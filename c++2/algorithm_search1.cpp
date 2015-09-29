#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> myVector = {5,6,9,8,8,3};
    auto begin = myVector.begin();
    auto end = myVector.end();

    auto it = min_element(begin,end);
    auto it2 = max_element(begin,end);
    cout << "min is " << *it << " and max is " << *it2 << endl;

    it = adjacent_find(begin,end);
    if(it!=end)
    {
        cout << "Found two consecutive equal elements with value " << *it << endl;
    }

    vector<int> targets = {8,9};
    it = find_first_of(begin, end, targets.begin(), targets.end());
    if(it!=end)
    {
        cout << "Found one of 8 or 9 : " << *it << endl;
    }

    vector<int> sub = {8,3};
    it = search(begin, end, sub.begin(), sub.end());
    if(it!=end)
    {
        cout << "Found subsequence {8,3}" << endl;
    }
    else
    {
        cout << "Unable to find subsequence {8,3}" << endl;
    }

    it2 = find_end(begin, end, sub.begin(), sub.end());
    if(it!=it2)
    {
        cout << "Error : search and find_end found different subsequence "
             << "even though there is only one match." << endl;
    }

    it = search_n(begin, end, 2, 8);
    if(it!=end)
    {
        cout << "Found two consecutive 8s" << endl;
    }
    else
    {
        cout << "Unable to find two consecutive 8s" << endl;
    }
}
