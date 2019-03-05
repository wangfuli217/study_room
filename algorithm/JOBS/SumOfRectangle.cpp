/*
문제
N x M 의 직사각형이 주어지며, 각 칸에는 정수가 들어있다. 이제 Q개의 질문에 대하여 답을 해야 하며, 각각의 질문은 (a, b)부터 (c, d)까지의 직사각형에 들어있는 정수의 합을 묻는다. 예를 들어, 다음과 같이 5 x 5 의 직사각형이 주어질 때, (1, 2) 부터 (3, 3) 까지의 직사각형에 들어있는 정수의 합은 26 이다.

alt text

 

입력
첫 번째 줄에 N, M, Q가 주어진다. ( 1 ≤ N, M ≤ 1,000, 1 ≤ Q ≤ 1,000,000 ) 두 번째 줄부터 N x M 직사각형이 주어진다. 직사각형 안의 숫자 S는 -100이상 100이하이다. 그 후 Q개의 질문이 주어진다. 각각의 질문은 “a b c d” 로 이루어 져 있으며, 이는 (a, b) 부터 (c, d) 까지의 직사각형에 들어있는 정수의 합을 묻는다. (0 ≤ a ≤ c < N, 0 ≤ b ≤ d < M)  

출력
각 질문에 대한 답을 출력한다.

 

예제 입력
5 5 3
 1 -2 3 2 8
-8 -9 3 4 5
 2 4 7 8 2
 1 4 3 1 4
-1 2 5 -6 3
1 2 3 4
0 0 1 1
2 0 2 1

예제 출력
37
-18
6
*/

#include <cstdio>

using namespace std;

const int MAX = 1000;
const int QMAX = 100000;

int input[MAX][MAX];
int tmp[MAX][MAX];
int Table[MAX][MAX];
int QNum[QMAX];

int main() {

  int i,j;
  int N, M;
  int QLen;
  int sx, sy, ex, ey;

  scanf("%d %d %d", &N, &M, &QLen);

  for(i=0; i<N; i++)
  {
    for(j=0; j<M; j++)
    {
      scanf(" %d", &input[i][j]);
      if(j>0)
      {
        tmp[i][j] = input[i][j] + tmp[i][j-1];
      }
      else
      {
        tmp[i][j] = input[i][j];
      }
    }
  }

  for(i=0; i<N; i++)
  {
    for(j=0; j<M; j++)
    {
      if(i==0) Table[i][j] = tmp[i][j];
      else Table[i][j] = tmp[i][j] + Table[i-1][j];
    }
  }

  int result = 0;
  for(i=0; i<QLen; i++)
  {
    scanf("%d %d %d %d", &sx, &sy, &ex, &ey);

    result = Table[ex][ey];

    if(sy>0) result -= Table[ex][sy-1];
    if(sx>0) result -= Table[sx-1][ey];
    if(sx>0 && sy>0) result += Table[sx-1][sy-1];

    printf("%d\n", result);
  }

/*
  for(i=0; i<N; i++)
  {
    for(j=0; j<M; j++)
    {
      printf("% 5d ", Table[i][j]);
    }
    printf("\n");
  }
*/

  return 0;
}
