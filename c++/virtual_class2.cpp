// 가상함수를 통해 인터페이스와 동작을 물려줌.

#include <iostream>
using namespace std;

class Airport
{
public:
    Airport() {}
    Airport(string dest_name):dest(dest_name) {}
    string get_dest() const { return dest; }
private:
    string dest;
};

class Airplane
{
public:
    virtual void fly(const Airport& destination);
};

void Airplane::fly(const Airport& destination)
{
    cout << "Airplane::fly... : " << destination.get_dest() << endl;
}

class ModelA:public Airplane
{
};

class ModelB:public Airplane
{
};

int main()
{
    Airport seoul("Seoul");
    Airplane *pa = new ModelA;
    pa->fly(seoul);
}
