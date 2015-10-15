#ifndef __NON_COPYABLE_H__
#define __NON_COPYABLE_H__

namespace pong
{
    
class NonCopyable
{
protected:
    NonCopyable() {}

private:
    NonCopyable(const NonCopyable&);
    NonCopyable& operator =(const NonCopyable&);
};

} // namespace pong

#endif // __NON_COPYABLE_H__
