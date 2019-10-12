#include <iostream>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() {
    int i = 0;
    int num = 0;
    bool minus;
    char *s;
    int n, mx=-987654321, mn=987654321;

    s = (char *)malloc(9*1000000);

    scanf("%d\n", &n);
    scanf("%[^\n]s", s);

    while(s[i] == ' ') i++;

    while(s[i] != 0) {
        if(s[i] == '-') {
            minus = true;
            i++;
            continue;
        }
        if(s[i] == ' ') {
            if(minus) num = -num;
            if(num >= mx) mx = num;
            if(num <= mn) mn = num;
            num = 0;
            minus = false;
        }
        else {
            num = num * 10 + (s[i]-'0');
        }
        i++;
    }

    if(num >= mx) mx = num;
    if(num <= mn) mn = num;

    printf("%d %d\n", mn, mx);
    return 0;
}
