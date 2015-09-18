#include <iostream>
#include <vector>
using namespace std;

void separateOddsAndEvens(const vector<int>& org, vector<int>& odds, vector<int>& evens)
{
    for(auto i : org)
    {
	cout << i << " ";

	if( i % 2 == 0 )
	{
	    evens.push_back(i);
	}
	else
	{
	    odds.push_back(i);
	}
    }
    cout << endl;
}

int main()
{
    vector<int> vecUnSplit = {1,2,3,4,5,6,7,8,9,10};
    vector<int> odds, evens;

    separateOddsAndEvens(vecUnSplit, odds, evens);

    cout << "odds : ";
    for(auto i : odds) cout << i << " ";
    cout << endl;

    cout << "evens : ";
    for(auto i : evens) cout << i << " ";
    cout << endl;
}
