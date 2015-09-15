// efffective c++ 35
// 비가상함수를 통해 인터페이스와 행위의 윤곽을 잡아주고,
// 실제 하는 일은 파생 클래스에서 재정의하게 하는 방법
// --> template method 패턴 

#include <iostream>
using namespace std;

class GameCharacter
{
public:
    int get_energy()
    {
	cout << "before job..." << endl;
	int ret = dojob_get_energy();
	cout << "after job..." << endl;

	return ret;
    }
private:
    virtual int dojob_get_energy()
    {
	cout << "default dojob..." << endl;
	return 0;
    }
};

class Zerg:public GameCharacter
{
private:
    virtual int dojob_get_energy()
    {
	cout << "Zerg dojob..." << endl;
	return 1;
    }
};

class Tank:public GameCharacter
{
private:
    virtual int dojob_get_energy()
    {
	cout << "Tank dojob..." << endl;
	return 2;
    }
};

class Observer:public GameCharacter
{
};

int main()
{
    Zerg z;
    Tank t;
    Observer o;

    cout << z.get_energy() << endl;
    cout << t.get_energy() << endl;
    cout << o.get_energy() << endl;
}
