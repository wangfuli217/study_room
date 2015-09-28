#include <iostream>
#include <string>
#include <list>
#include <map>
using namespace std;

class BuddyList
{
public:
    BuddyList() = default;
    void addBuddy(const string& name, const string& buddy);
    void removeBuddy(const string& name, const string& buddy);
    bool isBuddy(const string& name, const string& buddy) const;
    list<string> getBuddies(const string& name) const;
protected:
    multimap<string,string> mBuddies;
};

void BuddyList::addBuddy(const string& name, const string& buddy)
{
    if(!isBuddy(name,buddy))
    {
        mBuddies.insert({name,buddy});
    }
}

void BuddyList::removeBuddy(const string& name, const string& buddy)
{
    auto start = mBuddies.lower_bound(name);
    auto end = mBuddies.upper_bound(name);

    for(; start!=end; ++start)
    {
        if(start->second == buddy)
        {
            mBuddies.erase(start);
            break;
        }
    }
}

bool BuddyList::isBuddy(const string& name, const string& buddy) const
{
    auto start = mBuddies.lower_bound(name);
    auto end = mBuddies.upper_bound(name);

    for(; start!=end; ++start)
    {
        if(start->second == buddy)
        {
            return true;
        }
    }

    return false;
}

list<string> BuddyList::getBuddies(const string& name) const
{
    auto its = mBuddies.equal_range(name);
    list<string> buddies;

    for(; its.first!=its.second; ++its.first)
    {
        buddies.push_back(its.first->second);
    }
    return buddies;
}

int main()
{
    BuddyList buddies;
    buddies.addBuddy("Harry Potter", "Ron Weasley");
    buddies.addBuddy("Harry Potter", "Hermione Granger");
    buddies.addBuddy("Harry Potter", "Hagrid");
    buddies.addBuddy("Harry Potter", "Draco Malfoy");
    buddies.removeBuddy("Harry Potter", "Draco Malfoy");

    buddies.addBuddy("Hagrid", "Harry Potter");
    buddies.addBuddy("Hagrid", "Ron Weasley");
    buddies.addBuddy("Hagrid", "Hermione Granger");

    auto harryBuds = buddies.getBuddies("Harry Potter");
    std::cout << "Harry's friends : " << std::endl;
    for(auto& name : harryBuds)
        std::cout << "\t" << name << std::endl;
}
