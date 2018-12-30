#include <stdio.h>


void print_result( char * result, int depth )
{
    int  i;

    for( i=0; i<=depth; i++ )
    {
        printf("%c", 'a' + result[i]);
    }
    printf("\n");
}

void permute( char * arr, int n, int r, int depth, char * result )
{
    int  i;

    if( (depth + 1) == r )
    {
        for( i=0; i<n; i++ )
        {
            if( *(char *)(arr + i) != (char)-1 )
            {
                result[depth] = arr[i];
                print_result( result, depth );
            }
        }

        return;
    }

    for( i=0; i<n; i++ )
    {
        if( *(char *)(arr + i) != (char)-1 )
        {
            result[depth] = arr[i];
            arr[i] = (char)-1;

            permute( arr, n, r, depth+1, result );

            arr[i] = i;
        }
    }
}

int main()
{
    int i, n, r;
    char arr[26];
    char result[26];

    scanf("%d %d", &n, &r);  // 0 < n,r <= 26, n > r

    for(i=0; i<26; i++)
    {
        arr[i] = i;
    }

    permute( arr, n, r, 0, result );
}
