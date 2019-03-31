#include <cstdio>

using namespace std;

int t;

const int MAX = 40;
int dp[MAX];

int fibonacci(int n) {
    if(n==0) {
        return (dp[0] = 0);
    }

    if(n==1) {
        return (dp[1] = 1);
    }

    if(dp[n]>0) {
        return dp[n];
    }

    return (dp[n] = fibonacci(n-1) + fibonacci(n-2));
}

int main()
{
    int n;

    scanf("%d", &n);

    printf("%d\n", fibonacci(n));

    return 0;
}
