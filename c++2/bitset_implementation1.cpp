#include <iostream>
#include <bitset>
#include <map>
using namespace std;

using std::map;
using std::bitset;
using std::string;
using std::out_of_range;
const int kNumChannels = 10;

class CableCompany
{
public:
    CableCompany() {}
    void addPackage(const string& packageName,
                    const bitset<kNumChannels>& channels);
    void removePackage(const string& packageName);
    void newCustomer(const string& name, const string& package) throw(out_of_range);
    void newCustomer(const string& name, const bitset<kNumChannels>& channels);
    void addChannel(const string& name, int channel);
    void removeChannel(const string& name, int channel);
    void addPackageToCustomer(const string& name, const string& package);
    void deleteCustomer(const string& name);
    bitset<kNumChannels>& getCustomerChannels(const string& name) throw(out_of_range);
protected:
    typedef map<string,bitset<kNumChannels> > MapType;
    MapType mPackages, mCustomers;
};

void CableCompany::addPackage(const string& packageName,
                              const bitset<kNumChannels>& channels)
{
    mPackages.insert({packageName,channels});
}

void CableCompany::removePackage(const string& packageName)
{
    mPackages.erase(packageName);
}

void CableCompany::newCustomer(const string& name, const string& package)
    throw(out_of_range)
{
    auto ret = mPackages.find(package);
    if(ret == mPackages.end())
    {
        throw out_of_range("newCustomer : out of range");
    }

    mCustomers.insert(make_pair(name, ret->second));
}

void CableCompany::newCustomer(const string& name, const bitset<kNumChannels>& channels)
{
    mCustomers.insert(make_pair(name,channels));
}

void CableCompany::addChannel(const string& name, int channel)
{
    mPackages[name].set(channel);
}

void CableCompany::removeChannel(const string& name, int channel)
{
    auto it = mPackages.find(name);
    if(it != mPackages.end())
    {
        it->second.reset(channel);
    }
}

void CableCompany::addPackageToCustomer(const string& name, const string& package)
{
    auto it = mCustomers.find(name);
    if(it != mCustomers.end())
    {
        auto itp = mPackages.find(package);
        if(itp != mPackages.end())
        {
            it->second |= itp->second;
        }
    }
}

void CableCompany::deleteCustomer(const string& name)
{
    auto it = mCustomers.find(name);
    if(it != mCustomers.end())
    {
        mCustomers.erase(name);
    }
}

bitset<kNumChannels>& CableCompany::getCustomerChannels(const string& name) throw(out_of_range)
{
    auto it = mCustomers.find(name);
    if(it != mCustomers.end())
    {
        return it->second;
    }
    else
    {
        throw out_of_range("getCustomerChannels : out of range");
    }
}

int main()
{
    CableCompany myCC;

    auto basic_pkg = "1111000000";
    auto premium_pkg = "1111111111";
    auto sports_pkg = "0000100111";

    myCC.addPackage("basic", bitset<kNumChannels>(basic_pkg));
    myCC.addPackage("premium", bitset<kNumChannels>(premium_pkg));
    myCC.addPackage("sports", bitset<kNumChannels>(sports_pkg));

    myCC.newCustomer("Nicholas Solter", "basic");
    myCC.addPackageToCustomer("Nicholas Solter", "sports");
    cout << myCC.getCustomerChannels("Nicholas Solter") << endl;
    
    return 0;
}
