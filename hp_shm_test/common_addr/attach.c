#include <stdio.h>
#include <errno.h>
#include <sys/shm.h>

int main( int argc, char * argv[] )
{
    int    sHandle;
    void * sAddr;

    /*
    sHandle = shmget( 0x11111,
                      100*1024*1024,
                      IPC_GLOBAL | SHM_R | SHM_W );
    */
    sHandle = shmget( 0x11111,
                      100*1024*1024,
                      SHM_R | SHM_W );

    if( sHandle == -1 )
    {
        printf(" shmget error(%d)\n", errno );
    }

    /*
    sAddr = shmat( sHandle,
                   (void*)NULL,
                   SHM_RND );
    */
    sAddr = shmat( sHandle,
                   (void*)NULL,
                   SHM_RND );

    if( sAddr == (void*)-1 )
    {
        printf(" shmat error(%d)\n", errno );
    }
    else
    {
        printf("attach address : 0x%lx\n", sAddr);
    }

    return 1;
}
