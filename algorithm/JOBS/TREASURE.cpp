#include <cstdio>
#include <vector>
#include <queue>

using namespace std;

const int MAX = 50;
char map[MAX][MAX];
vector<int> lr;
vector<int> lc;

queue<int> q;

int r, c;

int maxdist = 0;
int adj[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};
bool checked[MAX][MAX];

int makePos(int i, int j)
{
  return (i*c + j);
}

int getRow(int pos)
{
  return (pos/c);
}

int getCol(int pos)
{
  return (pos%c);
}

void BFS(int i, int j) 
{
  int pos = makePos(i,j);
  short count = 0;
  pos = pos<<16 | count;
  q.push(pos);
  checked[i][j] = true;
  
  while(!q.empty()) {
    pos = q.front();
    
    count = pos & 0xffff;
    pos = pos >> 16;

    if(count>maxdist) maxdist = count;
    
    i = getRow(pos);
    j = getCol(pos);

    //printf("  B[%d,%d] -> dist(%d)\n", i, j, count);
    
    q.pop();
    
    for(int x=0; x<4; x++) {
      int rr = i + adj[x][0];
      int cc = j + adj[x][1];
      if(rr<0 || cc<0 || rr>r || cc>c) continue;
      
      if(!checked[rr][cc] && map[rr][cc]=='L') {
        checked[rr][cc] = true;
        pos = makePos(rr,cc);
        q.push(pos<<16 | (count+1));
      }
    }
  }
}

void clear()
{
  for(int i=0; i<r; i++) for(int j=0; j<c; j++) checked[i][j] = false;
}

int main() {

  // 1. L 의 위치를 vector 에 담아둔다.
  // 2. vector 에서 하나씩 빼서 해당 L 에서 BFS 수행하면서
  //    가장 먼 거리를 저장
  
  scanf("%d %d", &r, &c);
  
  for(int i=0; i<r; i++) {
    for(int j=0; j<c; j++) {
      scanf(" %c", &map[i][j]);
      if(map[i][j]=='L') {
        lr.push_back(i);
        lc.push_back(j);
      }
    }
  }
  
  for(int i=0; i<lr.size(); i++) {
    BFS(lr[i], lc[i]);
    clear();
  }
  
  printf("%d\n", maxdist);
  return 0;
}


/*
/// BAEK 2589.보물섬

#include <iostream>
#include <queue>
#include <memory.h>

#define endl '\n'
#define MAX(a, b) (a)>(b)?(a):(b)

using namespace std;

bool isle[52][52], t[52][52];
short dx[4] = { 0, 0, 1, -1 }, dy[4] = { 1, -1, 0, 0 };

struct Point {
	short y, x, counter;
};

queue <Point> q;

int main()
{
	ios::sync_with_stdio(false);
	cin.tie(0);

	short n, m, i, j, ans = 0, x, y, d;
	cin >> n >> m;
	for (i = 0; i < n; i++) {
		for (j = 0; j < m; j++) {
			char input;
			cin >> input;
			if (input == 'L')
				isle[i][j] = 1;
		}
	}

	for (i = 0; i < n; i++) {
		for (j = 0; j < m; j++) {
			if (isle[i][j]) {
				if (isle[i - 1][j] && isle[i + 1][j])
					continue;
				if (isle[i][j - 1] && isle[i][j + 1])
					continue;
				memcpy(t, isle, sizeof(t));
				t[i][j] = 0;
				q.push({ i, j, 0 });
				while (!q.empty()) {
					Point tmp = q.front();
					q.pop();
					ans = MAX(ans, tmp.counter);

					for (d = 0; d < 4; d++) {
						x = tmp.x + dx[d];
						y = tmp.y + dy[d];
						if (0 <= x && x < m && 0 <= y && y < n && t[y][x]) {
							t[y][x] = 0;
							q.push({ y, x, tmp.counter + 1 });
						}
					}
				}
			}
		}
	}
	cout << ans << endl;
}
 */
