#include<iostream>
#include<algorithm>
#include<string>

uint64_t descendingOrder(uint64_t a)
{
    std::string temp = std::to_string(a);

    std::sort(temp.begin(), temp.end());
    std::reverse(temp.begin(), temp.end());   

    return stoull(temp);
}

int main()
{
    std::cout << descendingOrder(52347);
    return 0;
}