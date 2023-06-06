#include <cstdint>
#include <iostream>
#include<algorithm>
#include <string>

std::string binary(int a)
{
  if (a < 0) return "1";
  return std::to_string(a%2) + binary(a/2);
}

std::string add_binary(uint64_t a, uint64_t b) 
{
  std::string temp;
  a = a + b; 
  temp = binary(a);
  std::reverse(temp.begin(), temp.end());  
  return temp;
}


int main()
{
    std::cout << add_binary(1, 2);
    return 0;
}