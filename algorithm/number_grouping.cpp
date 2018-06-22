/*
 * 다음과 같이 특정 숫자를 입력하여 해당 숫자를 적절한 숫자 Group 안에 들도록 변환하여 리턴하시오.
 * 단, 원래 입력숫자의 순서는 group 의 숫자로 변환된 뒤에도 순서를 유지해야 한다.
 * 입력값 3 은 grouping 갯수이고, 250 은 한 그룹의 최대 숫자 갯수
 * 입력 :   f(1,3,250)   ->    1  출력
 *          f(2,3,250)   ->  251
 *          f(3,3,250)   ->  501
 *          f(4,3,250)   ->    2
 *          f(5,3,250)   ->  252
 *          f(6,3,250)   ->  502
 *          f(7,3,250)   ->    3
 *          f(8,3,250)   ->  253
 *          ...
 *          f(748,3,250) ->  250
 *          f(749,3,250) ->  500
 *          f(750,3,250) ->  750
 *
 */

#include <iostream>

using namespace std;

int f( int input_number,
       int group_count,
       int group_size )
{
    int  groupid = (input_number-1)%group_count;

    return (groupid * group_size) + ((input_number-1)/group_count + 1);
}

int main()
{
    for(int i = 1; i < 100; i++ )
    {
        cout << i << "  -->  " << f(i, 4, 250) << endl;
    }

    return 0;
}
