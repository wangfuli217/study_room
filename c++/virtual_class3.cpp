// effective c++ 34
// defaultFly 를 분리하여 파생클래스가 무조건 fly 의 행동을
// 똑같이 물려받지 않도록 함.
// fly 를 반드시 재정의하되 니 방식대로 쓰고 싶으면 니가 알아서
// 구현하고, 아니면 default 를 그냥 쓰던지 해라.

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
    virtual void fly(const Airport& destination) = 0;
protected:
    void defaultFly(const Airport& destination);
};

void Airplane::defaultFly(const Airport& destination)
{
    cout << "Airplane::defaultFly... : " << destination.get_dest() << endl;
}

class ModelA:public Airplane
{
public:
    virtual void fly(const Airport& destination)
    {
	defaultFly(destination);
    }
};

class ModelB:public Airplane
{
public:
    virtual void fly(const Airport& destination)
    {
	defaultFly(destination);
    }
};

class ModelC:public Airplane
{
public:
    virtual void fly(const Airport& destination)
    {
	cout << "ModelC fly... : " << destination.get_dest() << endl;
    }
};

int main()
{
    Airport seoul("Seoul");

    Airplane *pa = new ModelA;
    pa->fly(seoul);

    Airplane *pa1 = new ModelB;
    pa1->fly(seoul);
    
    Airplane *pa2 = new ModelC;
    pa2->fly(seoul);

    return 0;
}
