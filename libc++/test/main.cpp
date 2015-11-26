#include "String.h"
#include <iostream>

int main()
{
  cr::String s;
 
  std::string s1 = s;
  std::wstring s2 = s;
  s = "hello";
  s = L"hello";
  s += ' ';
  s += 'a';
  s += L'a';
 
  cr::String s3("world");
  std::cout << s << " " << s3 << std::endl;

  cr::String s4;
  std::cin >> s4;
  std::cout << s4;
}
