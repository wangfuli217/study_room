g++ -Wc++11-extensions -c Main.cpp
g++ -Wc++11-extensions -c Ball.cpp
g++ -Wc++11-extensions -c Paddle.cpp
g++ -Wc++11-extensions -c Variables.cpp
g++ -o pong Main.o Ball.o Paddle.o Variables.o -lsfml-system -lsfml-graphics -lsfml-audio -lsfml-window
