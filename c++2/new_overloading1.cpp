#include <iostream>
#include <new>

class MemoryDemo
{
public:
    void* operator new(std::size_t size, int extra);
    void operator delete(void* ptr, int extra) noexcept;
};

void* MemoryDemo::operator new(std::size_t size, int extra)
{
    std::cout << "operator new with extra int arg" << std::endl;
    return ::operator new(size);
}

void MemoryDemo::operator delete(void* ptr, int extra) noexcept
{
    std::cout << "operator delete with extra int arg" << std::endl;
    return ::operator delete(ptr);
}

int main()
{
    MemoryDemo * p = new(5) MemoryDemo();
    delete p;
}
