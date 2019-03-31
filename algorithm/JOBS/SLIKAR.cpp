// BAEKJOON-3055 탈출

#include <cstdio>
#include <queue>
#include <vector>

using namespace std;

const int MAX = 50;
char forest[MAX][MAX];        // 주어진 숲 조건 저장
int water[MAX][MAX];          // 물이 각 칸에 차는 최단시간 저장
int beaver[MAX][MAX];         // beaver 의 이동경로 BFS
bool checked[MAX][MAX];       // BFS 동안 check 된 칸
queue<long long int> q;
vector<int> waterPos;

int r, c;
int beaverR, beaverC;
int caveR, caveC;

int adj[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};

void waterOneBFS(int row, int col)
{
  long long int count = 0;
  long long int pos = row * c + col; 
  long long int val = pos << 32 | count;
  q.push(val);
  checked[row][col] = true;
  
  while(!q.empty()) {
    long long int qval = q.front();
    count = qval & 0xffffffff;
    pos = qval >> 32;
    
    row = pos / c;
    col = pos % c;
    
    q.pop();

    //printf("row(%d) col(%d) count(%d)\n", row, col, count);
    
    for(int i=0; i<4; i++) {
      int rr = row + adj[i][0];
      int cc = col + adj[i][1];

      if(cc<0 || cc>=c || rr<0 || rr>=r) continue;
      if(forest[rr][cc]!='.') continue;

      if(!checked[rr][cc]) {
        if(water[rr][cc]>0 && water[rr][cc]<(count+1)) continue;
        water[rr][cc] = count + 1;
        
        pos = rr * c + cc;
        checked[rr][cc] = true;
        q.push(pos<<32 | (count+1));
      }
    }
  }
}

void clearChecked()
{
  for(int i=0; i<r; i++) {
    for(int j=0; j<c; j++) {
      checked[i][j] = false;
    }
  }
}

// 각 칸 별로 물이 도착하는 최소시간을 기록해둔다.
void waterBFS()
{
  int row, col;
  
  for(int i=0; i<waterPos.size(); i++) {
    row = waterPos[i] / c;
    col = waterPos[i] % c;
    
    waterOneBFS(row,col);
    clearChecked();
  }
}

int abs(int a)
{
  if(a>=0) return a;
  else return (-a);
}

// beaver 가 water[][] 정보를 참고하여 BFS 를 수행한다.
void beaverBFS()
{
  long long int count = 0;
  long long int pos = beaverR * c + beaverC;
  long long int val = pos<<32 | count;
  q.push(val);
  checked[beaverR][beaverC] = true;
  
  while(!q.empty()) {
    long long int qval = q.front();
    
    long long int pos = qval >> 32;
    long long int count = qval & 0xffffffff;
    
    q.pop();
    
    int row = pos / c;
    int col = pos % c;
    
    for(int i=0; i<4; i++) {
      int rr = row + adj[i][0];
      int cc = col + adj[i][1];

      if(cc<0 || cc>=c || rr<0 || rr>=r) continue;
      if(forest[rr][cc]!='.' && forest[rr][cc]!='D') continue;

      if(!checked[rr][cc]) {
        if(water[rr][cc]>0 && (count+1)>=water[rr][cc]) continue;
        beaver[rr][cc] = count+1;

        pos = rr * c + cc;
        q.push(pos<<32 | (count+1));
        checked[rr][cc] = true;
      }
    }
  }
}

int main() {

  scanf("%d %d", &r, &c);
  
  for(int i=0; i<r; i++) {
    for(int j=0; j<c; j++) {
      scanf(" %c", &forest[i][j]);
      if(forest[i][j]=='S') {
        beaverR = i;
        beaverC = j;
      }
      if(forest[i][j]=='D') {
        caveR = i;
        caveC = j;
      }
      if(forest[i][j]=='X') {
        water[i][j] = -1; // 물이 절대 도착할 수 없는 곳
      }
      if(forest[i][j]=='*') {
        waterPos.push_back(i*c+j);
      }
    }
  }

  waterBFS();
  
  clearChecked();
  
  beaverBFS();
  
  if(beaver[caveR][caveC]==0) printf("KAKTUS\n");
  else printf("%d\n", beaver[caveR][caveC]);

  return 0;
}

// best of all
/*
#include <stdio.h>

int R, C;
char s[52][52];

int expand (char a, char b)
{
	int i, j, k = 0;

	for (i = 1; i <= R; i++) for (j = 1; j <= C; j++)
	{
		if (s[i][j] == a)
		{
			if (s[i + 1][j] == 'D') k = 1;
			else if (s[i + 1][j] != a && s[i + 1][j] != '*' && s[i + 1][j] != 'X')
				s[i + 1][j] = b;
			if (s[i - 1][j] == 'D') k = 1;
			else if (s[i - 1][j] != a && s[i - 1][j] != '*' && s[i - 1][j] != 'X')
				s[i - 1][j] = b;
			if (s[i][j + 1] == 'D') k = 1;
			else if (s[i][j + 1] != a && s[i][j + 1] != '*' && s[i][j + 1] != 'X')
				s[i][j + 1] = b;
			if (s[i][j - 1] == 'D') k = 1;
			else if (s[i][j - 1] != a && s[i][j - 1] != '*' && s[i][j - 1] != 'X')
				s[i][j - 1] = b;
		}
	}

	return k;
}

int change (char a, char b)
{
	int i, j, k = 0;

	for (i = 1; i <= R; i++) for (j = 1; j <= C; j++)
	{
		if (s[i][j] == a)
		{
			s[i][j] = b;
			k++;
		}
	}

	return k;
}

int main (void)
{
	int i, j;

	scanf ("%d %d", &R, &C);

	for (i = 1; i <= R; i++)
		scanf ("%s", s[i] + 1);

	for (i = 1; ; i++)
	{
		if (j = expand ('S', 's'))
			break;
		expand ('*', '+');
		if (!change ('s', 'S'))
			break;
		change ('+', '*');
	}

	if (j) printf ("%d\n", i);
	else printf ("KAKTUS\n");
}
*/
