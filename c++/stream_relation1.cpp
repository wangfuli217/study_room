#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream inFile("input.txt");
    ofstream outFile("output.txt");

    inFile.tie(&outFile);

    outFile << "Hello there!";

    string nextToken;
    inFile >> nextToken;

    cout << nextToken << endl;
}
