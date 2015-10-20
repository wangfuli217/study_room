#include <stdio.h>
#include <errno.h>
#include <sys/shm.h>

int main( int argc, char * argv[] )
{
    int    sHandle;
    void * sAddr;

    sHandle = shmget( 0x11111,
                      100*1024*1024,
                      SHM_R | SHM_W | IPC_CREAT | IPC_EXCL );

    if( sHandle == -1 )
    {
        printf(" shmget error(%d)\n", errno );
    }

    sAddr = shmat( sHandle,
                   (void*)NULL,
                   SHM_R );

    if( sAddr == (void*)-1 )
    {
        printf(" shmat error(%d)\n", errno );
    }
    else
    {
        printf(" shmat addr(0x%lx)\n", sAddr );
    }

    return 1;
}
