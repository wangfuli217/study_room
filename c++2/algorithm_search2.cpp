#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> vec = {0,0,0,1,0,2,0};
    auto begin = vec.cbegin();
    auto end = vec.cend();

    auto it = find_if_not(begin,end,[](int i){return i == 0;});
    if(it==end)
    {
        cout << "No element cound != 0" << endl;
    }
    else
    {
        cout << "Found element " << *it << " != 0" << endl;
    }

    auto minmax = minmax_element(begin,end);
    cout << "Min = " << *(minmax.first) << " and Max = " << *(minmax.second) << endl;

    vector<int> vec2 = {1,1,1,1};
    if(all_of(vec2.cbegin(), vec2.cend(), [](int i){return i==1;}))
    {
        cout << "All elements are == 1" << endl;
    }
    else
    {
        cout << "Not all elements are == 1" << endl;
    }

    vector<int> vec3 = {0,0,1,0};
    if(any_of(vec3.cbegin(),vec3.cend(),[](int i){return i==1;}))
    {
        cout << "At least one element == 1" << endl;
    }
    else
    {
        cout << "No elements are == 1" << endl;
    }

    vector<int> vec4 = {0,0,0,0};
    if(none_of(vec4.cbegin(),vec4.cend(),[](int i){return i==1;}))
    {
        cout << "All elements are != 1" << endl;
    }
    else
    {
        cout << "Some elements are == 1" << endl;
    }

    vector<int> vec5 = {1,1,0,4,5,6};
    auto ppoint = partition_point(vec5.cbegin(),vec5.cend(),
                                  [](int i){return i==1;});
    cout<< "Partition point at position " << (ppoint-vec5.cbegin()) << endl;
}
