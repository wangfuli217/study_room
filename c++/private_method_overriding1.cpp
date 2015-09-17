// expert c++ 8.6.3.3
#include <iostream>
using namespace std;

class MilesEstimator
{
public:
    virtual int getMilesLeft()
    {
	return getMilesPerGallon() * getGallonsLeft();
    }
    virtual void setGallonsLeft(int inValue) { mGallonsLeft = inValue; }
    virtual int getGallonsLeft() { return mGallonsLeft; }
private:
    int mGallonsLeft;
    virtual int getMilesPerGallon() { return 20; }
};

class EfficientCarMilesEstimator : public MilesEstimator
{
private:
    // private member function overriding
    virtual int getMilesPerGallon() { return 35; }
};

int main()
{
    MilesEstimator myMilesEstimator;
    myMilesEstimator.setGallonsLeft(2);

    cout << "I can go " << myMilesEstimator.getMilesLeft() << " more miles." << endl;

    EfficientCarMilesEstimator myEstimator;
    myEstimator.setGallonsLeft(2);

    cout << "I can go " << myEstimator.getMilesLeft() << " more miles." << endl;

    return 0;
}
