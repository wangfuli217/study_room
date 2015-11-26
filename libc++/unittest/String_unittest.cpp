#include "String.h"
#include "gtest/gtest.h"

TEST(String, ConstructorTest)
{
    const cr::String s;
    const char * ansiStr = "ansi string";
    const cr::String s1(ansiStr);

    EXPECT_EQ(0, s.getSize());
    EXPECT_EQ(sizeof(ansiStr), s1.getSize());
}
