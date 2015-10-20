rm *.o create attach rmshm

gcc -m64 -c create.c
gcc -m64 -o create create.o
gcc -m64 -c attach.c
gcc -m64 -o attach attach.o
gcc -m64 -c rmshm.c
gcc -m64 -o rmshm rmshm.o
