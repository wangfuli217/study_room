/*
길이가 같은 두 문자열(string) A 와 B가 주어지면, A 가 B 로 1:1 암호화 가능한지 찾으시오.
예제)

Input: “EGG”, “FOO”
Output: True // E->F, G->O

Input: “ABBCD”, “APPLE”
Output: True // A->A, B->P, C->L, D->E

Input: “AAB”, “FOO”
Output: False
*/

#include <string.h>
#include <stdio.h>

unsigned char s[256];

int doit( char * s1, char * s2 )
{
    int i;
    int len1 = strlen(s1);
    int len2 = strlen(s2);

    if( len1 != len2 )
    {
        return -1;
    }

    for( i = 0; i < len1; i++ )
    {
        if( (char)s[*(s1+i)] == (char)0 )
        {
            s[*(s1+i)] = (char)*(s2+i);
        }
        else
        {
            if( (char)s[*(s1+i)] != (char)*(s2+i) )
            {
                return 0;
            }
        }

        if( (char)s[*(s2+i)] == (char)0 )
        {
            s[*(s2+i)] = (char)*(s1+i);
        }
        else
        {
            if( (char)s[*(s2+i)] != (char)*(s1+i) )
            {
                return 0;
            }
        }
    }

    return 1;
}

int main( int argc, char * argv[] )
{
    int i;
    int  result;

    memset(s, 0x00, sizeof(s));

    result = doit( argv[1], argv[2] );

    printf("%d\n", result);

    for( i = 0; i < 256; i++ )
    {
        if( (char)s[i] != (char)0 )
        {
            printf("%c -> %c\n", i, (char)s[i]);
        }
    }
}
