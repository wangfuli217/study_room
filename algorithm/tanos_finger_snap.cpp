/*
타노스는 프로그램의 균형을 위해서는 리스트의 원소 절반을 무작위로 삭제해야 한다고 믿고 있다.
타노스가 손가락을 튕겼을 때(프로그램을 실행했을 때) 입력된 리스트에서
절반의 원소를 무작위로 삭제하여 리턴하는 인피니티 건틀렛 프로그램을 작성하시오.
(무작위 삭제이므로 입력값이 같아도 출력값이 매번 달라야 합니다)

입력 예시
 [2, 3, 1, 6, 5, 7]

출력 예시 1
 [2, 5, 7]

출력 예시 2
 [3, 6, 5]

참고: 리스트의 원소가 홀수개일 경우 절반의 확률로 절반보다 많은 원소가 삭제되거나
절반보다 적은 원소가 삭제되어야 합니다.
(만약 리스트의 원소가 7개라면 절반의 확률로 3개 또는 4개의 원소가 삭제됨)
*/

#include <iostream>
#include <vector>

using namespace std;

void show_vector( vector<int>& v)
{
    for( auto& i : v )
    {
        cout << i << " ";
    }
    cout << endl;
}

void shuffle_data( vector<int>& v )
{
    long  rnum;
    int   tmp;

    /* before */
    show_vector(v);

    srand((unsigned int)time(NULL));

    for( int i = v.size()-1; i >= 0; i-- )
    {
        rnum = rand() % (i + 1);

        tmp = v[i];
        v[i] = v[rnum];
        v[rnum] = tmp;
    }

    /* after */
    show_vector(v);

    return;
}

int main(int argc, char * argv[])
{
    int  num;
    int  x;
    vector<int>  v;

    for( int i=1; i<argc; i++ )
    {
        v.push_back(atoi(argv[i]));
    }

    shuffle_data( v );

    if( v.size() % 2 == 0 )
    {
        for(int i=0; i<v.size()/2; i++)
        {
            cout << v[i] << " ";
        }
        cout << endl;
    }
    else
    {
        srand((unsigned int)time(NULL));
        num = rand() % 2;

        if( num == 0 )
        {
            x = v.size() / 2;
        }
        else
        {
            x = v.size() / 2 + 1;
        }

        for(int i=0; i<x; i++)
        {
            cout << v[i] << " ";
        }
        cout << endl;
    }

    return 0;
}
