rm *.o RemoveBlock

g++ -g -Wall -O0 -std=c++11 -c Main.cpp -I.
g++ -g -Wall -O0 -std=c++11 -c GamePlate.cpp -I.
g++ -g -Wall -O0 -std=c++11 -c Paddle.cpp -I.
g++ -g -Wall -O0 -std=c++11 -c Block.cpp -I.
g++ -g -Wall -O0 -std=c++11 -c AttackPaddle.cpp -I.
g++ -g -Wall -O0 -std=c++11 -c Ball.cpp -I.
g++ -o RemoveBlock Main.o GamePlate.o Paddle.o Block.o AttackPaddle.o Ball.o \
    -lsfml-system -lsfml-graphics -lsfml-audio -lsfml-window
