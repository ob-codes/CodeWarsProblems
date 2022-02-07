#include <cinttypes>
#include<iostream>
#include<string>

int rearrange(int);

uint64_t descendingOrder(uint64_t a)
{
    std::string temp, temp2;
    int max, maxindex;

    temp = std::to_string(a);
  
    for(int i=0; i<temp.size();i++)
    {
        char ch  = temp[i];
        for(int j=0; j<temp.size();j++)
        {
            if (temp[j] > temp[i])
            {
                ch = temp[j];
                maxindex = j;
            }
        }
        temp2.push_back(ch);
        temp[maxindex] = 0;
    }
    return stoi(temp2);
}

int main()
{
    std::cout << descendingOrder(1234);
    return 0;
}