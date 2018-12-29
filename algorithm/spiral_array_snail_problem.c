#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int  i, j, n;
    int  arr[100][100];  // [ypos][xpos]
    int  xpos = -1;
    int  ypos = 0;
    int  dir = 1;
    int  number = 0;

    n = atoi(argv[1]);

    memset( arr, -1, sizeof(arr) );

    for( i=n; i>=1; i-- ) {
        // ymove
        if( i < n ) {
            for( j=1; j<=i; j++ ) {
                ypos += dir;
                arr[ypos][xpos] = number;
                number++;
            }
            dir = -(dir);
        }

        // xmove
        for( j=1; j<=i; j++ ) {
            xpos += dir;
            arr[ypos][xpos] = number;
            number++;
        }
    }

    printf("number : %d\n", number);

    for( i=0; i<n; i++ ) {
        for( j=0; j<n; j++ ) {
            printf("% 5d", arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}
