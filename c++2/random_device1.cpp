#include <random>
#include <iostream>

int main() {

    std::mt19937_64 gen{ std::random_device()() };
    std::uniform_real_distribution<double> dis{ 0.0, 1.0 };

    for (int i=0; i<10; i++)
        std::cout << dis(gen) << "\n";
}
