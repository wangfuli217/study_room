#include <stdio.h>
#include <errno.h>
#include <sys/shm.h>

int main( int argc, char * argv[] )
{
	int    sHandle;
	void * sAddr;

	sHandle = shmget( 0x11111,
	                  100*1024*1024,
	                  SHM_R | SHM_W );

	if( sHandle == -1 )
	{
		printf(" shmget error(%d)\n", errno );
	}

	/*
    sAddr = shmat( sHandle,
                   (void*)0x60000000,
                   SHM_RND );

    if( sAddr == (void*)-1 )
    {
        printf(" shmat error(%d)\n", errno );
    }
	*/

	shmctl( sHandle,
	        IPC_RMID,
	        NULL );

	return 1;
}
