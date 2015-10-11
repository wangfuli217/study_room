
class NonCopyable
{
protected:
    NonCopyable() {}

private:
    NonCopyable(const NonCopyable& a);
    NonCopyable& operator=(const NonCopyable& a);
};

int main()
{
    // compile error
    // NonCopyable class 는 객체 생성 불가, 복제 및 대입 불가
    NonCopyable temp;
}
