/*
깊이우선탐색과 너비우선탐색
이전다음
문제
그래프가 주어질 때, 0번 정점을 시작으로 하여 깊이우선탐색과 너비우선탐색의 결과를 출력하는 프로그램을 작성하시오. 단, 노드를 방문할 때는 노드 번호가 작은 순서대로 방문한다고 하자.


입력
첫째 줄에 정점의 개수 N과 간선의 개수 M이 주어진다. (1 ≤ N ≤ 1,000, 1 ≤ M ≤ 100,000 ) 둘째 줄부터 간선의 정보가 주어진다. 각 줄은 두 개의 숫자 a, b로 이루어져 있으며, 이는 정점 a와 정점 b가 연결되어 있다는 의미이다.


출력
첫 번째 줄에 깊이우선탐색 결과, 두 번째 줄에 너비우선탐색 결과를 출력한다.

예제 입력
9 12
0 1
0 2
0 3
1 5
2 5
3 4
4 5
5 6
5 7
5 8
6 7
7 8


예제 출력
0 1 5 2 4 3 6 7 8
0 1 2 3 5 4 6 7 8
*/

#include <cstdio>
#include <string>
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

const int MAX_NODE = 1000;
bool visited[MAX_NODE];

vector<int> v[MAX_NODE];
queue<int> q;

void DFS(int root)
{
  visited[root] = true;
  printf("%d ", root);

  for(int i=0; i<v[root].size(); i++) {
    if(visited[v[root][i]]) continue;
    DFS(v[root][i]);
  }
}

void BFS()
{
  q.push(0);
  visited[0] = true;

  while(!q.empty()) {
    int val = q.front();
    printf("%d ", val);
    q.pop();

    for(int i=0; i<v[val].size(); i++) {
      if(visited[v[val][i]]) continue;
      visited[v[val][i]] = true;
      q.push(v[val][i]);
    }
  }
  printf("\n");
}

int main() {
  int n,m;
  int a,b;

  scanf("%d %d\n", &n, &m);

  for(int i=0; i<m; i++) {
    scanf("%d %d", &a, &b);
    v[a].push_back(b);
    v[b].push_back(a);
  }
  
  for(int i=0; i<MAX_NODE; i++) {
    if(v[i].size()>0) sort(v[i].begin(),v[i].end());
  }

  DFS(0);
  printf("\n");

  for(int i=0; i<MAX_NODE; i++) visited[i] = false;

  BFS();

/*
  for(int i=0; i<n; i++) {
    for(int j=0; j<v[i].size(); j++) {
      printf("%d ", v[i][j]);
    }
    printf("\n");
  }
*/
}
