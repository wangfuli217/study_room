#include <stdio.h>

void swap( int * arr, int x, int y)
{
    int tmp;

    tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}

void myqsort( int * arr, int arr_size )
{
    int tmp, i, j, p;

    if( arr_size <= 1 )
    {
        return;
    }

    i = 0;
    p = arr_size - 1;
    j = p - 1;

    while( i <= j )
    {
        while( arr[i] <= arr[p] ) i++;
        while( arr[j] > arr[p] ) j--;

        if( i >= 0 && j >= 0 && i < j )
        {
            swap(arr, i, j );
        }
    }

    if( i < p )
    {
        swap(arr, i, p );
        p = i;
    }

    myqsort( &arr[0], p);
    myqsort( &arr[p+1], arr_size - (p+1));
}

int main()
{
    int   i;
    int   arr[16] = { 10, -4, 3, 7, 1, 9, 5, -7, 2, 6, 7, -1, 9, 5, 7, 2};

    for(i=0; i<16; i++) { printf("%d ", arr[i]); } printf("\n");

    myqsort(arr, 16);

    for(i=0; i<16; i++) { printf("%d ", arr[i]); } printf("\n");

    return 0;
}
