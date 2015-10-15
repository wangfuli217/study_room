g++ -g -Wall -O0 -std=c++11 -fno-elide-constructors -c Paddle.cpp -I.
g++ -g -Wall -O0 -std=c++11 -fno-elide-constructors -c Ball.cpp -I.
g++ -g -Wall -O0 -std=c++11 -fno-elide-constructors -c Pong.cpp -I.
g++ -o Pong Paddle.o Ball.o Pong.o -lsfml-system -lsfml-graphics -lsfml-audio -lsfml-window
