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

template<typename T>
class Grid
{
public:
    Grid(size_t inWidth = kDefaultWidth, size_t inHeight = kDefaultHeight);
    Grid(const Grid<T>& src);
    virtual ~Grid();
    Grid<T>& operator=(const Grid<T>& rhs);
    void setElementAt(size_t x, size_t y, const T& inElem);
    T& getElementAt(size_t x, size_t y);
    const T& getElementAt(size_t x, size_t y) const;
    size_t getHeight() const { return mHeight; }
    size_t getWidth() const { return mWidth; }
    static const size_t kDefaultWidth = 10;
    static const size_t kDefaultHeight = 10;
protected:
    void copyFrom(const Grid<T>& src);
    T** mCells;
    size_t mWidth, mHeight;
};

template<typename T>
Grid<T>::Grid(size_t inWidth, size_t inHeight) : mWidth(inWidth), mHeight(inHeight)
{
    mCells = new T* [mWidth];
    for(size_t i = 0; i<mWidth; ++i)
    {
        mCells[i] = new T[mHeight];
    }
}

template<typename T>
Grid<T>::Grid(const Grid<T>& src)
{
    copyFrom(src);
}

template<typename T>
Grid<T>::~Grid()
{
    for(size_t i=0; i<mWidth; ++i)
    {
        delete [] mCells[i];
    }
    delete [] mCells;
    mCells = nullptr;
}

template<typename T>
void Grid<T>::copyFrom(const Grid<T>& src)
{
    mWidth = src.mWidth;
    mHeight = src.mHeight;
    mCells = new T*[mWidth];
    for(size_t i=0; i<mWidth; ++i)
    {
        mCells[i] = new T[mHeight];
    }
    for(size_t i=0; i<mWidth; ++i)
    {
        for(size_t j=0; j<mWidth; ++j)
        {
            mCells[i][j] = src.mCells[i][j];  // call T's assign operator=
        }
    }
}

template<typename T>
Grid<T>& Grid<T>::operator=(const Grid<T>& rhs)
{
    if(this == &rhs)
    {
        return *this;
    }

    for(size_t i=0; i<mWidth; ++i)
    {
        delete [] mCells[i];
    }

    delete [] mCells;
    mCells = nullptr;

    copyFrom(rhs);

    return *this;
}

template<typename T>
void Grid<T>::setElementAt(size_t x, size_t y, const T& inElem)
{
    mCells[x][y] = inElem;
}

template<typename T>
T& Grid<T>::getElementAt(size_t x, size_t y)
{
    return mCells[x][y];
}

template<typename T>
const T& Grid<T>::getElementAt(size_t x, size_t y) const
{
    return mCells[x][y];
}

int main()
{
    Grid<int> myIntGrid;
    Grid<double> myDoubleGrid(11,11);

    myIntGrid.setElementAt(0,0,10);
    int x = myIntGrid.getElementAt(0,0);
    cout << "myIntGrid(0,0) : " << x << endl;

    Grid<int> grid2(myIntGrid);    // copy constructor
    cout << "grid2(0,0) : " << grid2.getElementAt(0,0) << endl;

    Grid<int> anotherIntGrid = grid2; // assignment operator=
    cout << "anotherIntGrid(0,0) : " << anotherIntGrid.getElementAt(0,0) << endl;

    typedef Grid<int> IntGrid;

    IntGrid tg(10,10);
    tg.setElementAt(2,2,100);
    cout << "tg(2,2) : " << tg.getElementAt(2,2) << endl;

    Grid<myType> m(10,10);
    myType elem(777);
    m.setElementAt(7,7,elem);
    cout << "m(7,7) : " << m.getElementAt(7,7).get_val() << endl;
    cout << "m(9,9) : " << m.getElementAt(9,9).get_val() << endl;  // myDefaultVal

    return 0;
}
