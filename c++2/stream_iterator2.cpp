#include <iostream>
#include <vector>
using namespace std;

int main()
{
    vector<int> vectorOne, vectorTwo;
    for(int i=0; i<10; ++i)
    {
        vectorOne.push_back(100);
    }
    vector<int>::iterator it = vectorOne.begin();
    vectorOne.insert(it,1,10);
    vectorOne.insert(it,5,20);
    vectorOne.push_back(30);
    copy(vectorOne.begin(), vectorOne.end(), ostream_iterator<int>(cout," "));
    cout << endl;

    back_insert_iterator<vector<int>> inserter(vectorTwo);
    remove_copy_if(vectorOne.begin(), vectorOne.end(), inserter,
                   [](int i){ return i==100; });
    copy(vectorTwo.begin(), vectorTwo.end(), ostream_iterator<int>(cout," "));
    cout << endl;
}
