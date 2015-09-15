// efffective c++ 35
// strategy 패턴 
// template_method_pattern1.cpp 의 방법을 함수 포인터를 이용하여
// strategy pattern 으로 구현  

#include <iostream>
using namespace std;

class GameCharacter;

int default_dojob_get_energy(const GameCharacter& gc)
{
    cout << "default dojob..." << endl;
    return 0;
}

int zerg_dojob_get_energy(const GameCharacter& gc)
{
    cout << "zerg dojob..." << endl;
    return 1;
}

Int tank_dojob_get_energy(const GameCharacter& gc)
{
    cout << "tank dojob..." << endl;
    return 2;
}

typedef int (*do_func)(const GameCharacter&);

class GameCharacter
{
public:
    GameCharacter() {}
    explicit GameCharacter(do_func f = default_dojob_get_energy):myfunc(f) {}
    int get_energy()
    {
	return myfunc(*this);
    }
protected:
    do_func myfunc;
};

class Zerg:public GameCharacter
{
public:
    explicit Zerg(do_func f = default_dojob_get_energy):GameCharacter(f) {}
};

class Tank:public GameCharacter
{
public:
    explicit Tank(do_func f = default_dojob_get_energy):GameCharacter(f) {}
};

class Observer:public GameCharacter
{
public:
    explicit Observer(do_func f = default_dojob_get_energy):GameCharacter(f) {}
};

int main()
{
    Zerg z(zerg_dojob_get_energy);
    Tank t(tank_dojob_get_energy);
    Observer o(default_dojob_get_energy);

    cout << z.get_energy() << endl;
    cout << t.get_energy() << endl;
    cout << o.get_energy() << endl;
}
