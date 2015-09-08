#include <iostream>
//#include <iterator>

using namespace std;

template<class Iter>
struct iiterator_traits
{
    typedef typename Iter::iterator_category iterator_category;
    typedef typename Iter::value_type value_type;
    typedef typename Iter::difference_type difference_type;
    typedef typename Iter::pointer pointer;
    typedef typename Iter::reference reference;
};

struct iinput_iterator_tag
{
};

struct ooutput_iterator_tag
{
};

struct fforward_iterator_tag:public iinput_iterator_tag
{
};

struct bbidirectional_iterator_tag:public fforward_iterator_tag
{
};

struct rrandom_access_iterator_tag:public bbidirectional_iterator_tag
{
};

template<typename T>
class Vector
{
public:
    class Iterator
    {
    public:
	typedef rrandom_access_iterator_tag iterator_category;
	typedef T value_type;
	typedef int difference_type;
	typedef T* pointer;
	typedef T& reference;
	void operator+=(int) {}
    };
    void Push_back(const T& data) {}
    Iterator Begin() {return Iterator();}
};

template<typename T>
class List
{
public:
    class Iterator
    {
    public:
	typedef bbidirectional_iterator_tag iterator_category;
	typedef T value_type;
	typedef int difference_type;
	typedef T* pointer;
	typedef T& reference;
	void operator++() {}
    };
    void Push_back(const T& data) {}
    Iterator Begin() {return Iterator();}
};

template<typename Iter>
void _Advance(Iter& iter, int n, bbidirectional_iterator_tag category_tag)
{
    for(int i=0; i<n; ++i)
	++iter;
    cout << "bidirectional advance() ++iter execution" << endl;
}

template<typename Iter>
void _Advance(Iter& iter, int n, rrandom_access_iterator_tag category_tag)
{
    iter += n;
    cout << "random access advance() iter += n execution" << endl;
}

template<typename Iter>
void Advance(Iter& iter, int n)
{
    _Advance(iter, n, iiterator_traits<Iter>::iterator_category());
}

int main()
{
    Vector<int> v;
    v.Push_back(10);
    v.Push_back(20);
    v.Push_back(30);

    List<int> lt;
    lt.Push_back(10);
    lt.Push_back(20);
    lt.Push_back(30);

    Vector<int>::Iterator viter(v.Begin());
    List<int>::Iterator liter(lt.Begin());

    Advance(viter, 2);
    Advance(liter, 2);

    return 0;
}
