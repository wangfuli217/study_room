#include <iostream>
using namespace std;

class myType
{
public:
    myType(int a = myDefaultVal) : val(a) {}
    int get_val() const { return val; }
    static const size_t myDefaultVal = 111;
protected:
    int val;
};

template<typename T, size_t WIDTH, size_t HEIGHT>
class Grid
{
public:
    //Grid(const Grid<T>& src);  // use default 
    //virtual ~Grid();  // use default
    //Grid<T>& operator=(const Grid<T>& rhs);  // use default
    void setElementAt(size_t x, size_t y, const T& inElem);
    T& getElementAt(size_t x, size_t y);
    const T& getElementAt(size_t x, size_t y) const;
    size_t getHeight() const { return HEIGHT; }
    size_t getWidth() const { return WIDTH; }
protected:
    T mCells[WIDTH][HEIGHT];
};

template<typename T, size_t WIDTH, size_t HEIGHT>
void Grid<T,WIDTH,HEIGHT>::setElementAt(size_t x, size_t y, const T& inElem)
{
    mCells[x][y] = inElem;
}

template<typename T, size_t WIDTH, size_t HEIGHT>
T& Grid<T,WIDTH,HEIGHT>::getElementAt(size_t x, size_t y)
{
    return mCells[x][y];
}

template<typename T, size_t WIDTH, size_t HEIGHT>
const T& Grid<T,WIDTH,HEIGHT>::getElementAt(size_t x, size_t y) const
{
    return mCells[x][y];
}

int main()
{
    Grid<int,10,10> myGrid;
    Grid<int,10,10> anotherGrid;

    myGrid.setElementAt(2,3,45);
    anotherGrid = myGrid;

    cout << anotherGrid.getElementAt(2,3) << endl;

    //size_t height = 10;
    //Grid<int,10,height> g;   // compile error

    const size_t height = 10;
    Grid<int,10,height> g;     // compile ok
    g = myGrid;
    cout << g.getElementAt(2,3) << endl;

    // Grid<int,10,11> h;
    // h = g;    // compile error - different type

    return 0;
}
