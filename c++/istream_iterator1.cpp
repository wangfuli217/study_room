#include <iostream>
#include <algorithm>
#include <vector>
#include <iterator>
using namespace std;

int main()
{
    vector<int> v;

    copy(istream_iterator<int>(cin), istream_iterator<int>(),
	 back_inserter<vector<int>>(v));

    // ctrl+D to stop and show result

    cout << "v : ";
    copy(v.begin(), v.end(), ostream_iterator<int>(cout," "));
    cout << endl;

    cout << "v : ";
    for(auto i:v) cout << i << " ";
    cout << endl;

    return 0;
}
