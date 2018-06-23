/*
구글 입사문제
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)
*/

#include <iostream>

using namespace std;

int get_count( int num )
{
    int extra, count = 0;

    while( num != 0 )
    {
        extra = num % 10;
        if( extra == 8 )
        {
            count++;
        }

        num /= 10;
    }

    return count;
}

int main()
{
    int total_count = 0;

    for(int i=1; i<=10000; i++)
    {
        total_count += get_count(i);
    }

    cout << "total count of 8 : " << total_count << endl;

    return 0;
}
