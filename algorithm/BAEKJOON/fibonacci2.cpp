#include <cstdio>
#include <vector>

using namespace std;

const int MAX = 40;
int dp[MAX];

int t;
vector<int> q;

int fibonacci(int n) {
    if(n==0) {
        dp[0] = 0;
        return 0;
    }

    if(n==1) {
        dp[1] = 1;
        return 1;
    }

    if(dp[n]>0) {
        return dp[n];
    }

    dp[n] = fibonacci(n-1) + fibonacci(n-2);
    return dp[n];
}

int main()
{
    int n;

    scanf("%d", &t);

    for(int i=0; i<t; i++) {
        scanf("%d", &n);
        q.push_back(n);

        fibonacci(n);
    }

    for(int i=0; i<q.size(); i++) {
        int qidx = q[i];

        printf("%d %d\n", qidx==0 ? 1 : dp[qidx-1], dp[qidx]);
    }

    return 0;
}


/*
#include <cstdio>
int main(void){
	int testNum;
	scanf("%d", &testNum);
	while(testNum--){
		int num, zero, one;
		for(scanf("%d", &num), zero=1, one=0;num--;one+=zero, zero = one-zero);
		printf("%d %d\n", zero, one);
	}
}

main(n,a,b) {
    for(gets(&n);
    a=scanf("%d",&n)>0;
    printf("%d %d\n",a,b))
    for(b=0;n--;a=b-a) b+=a;
}
 */
