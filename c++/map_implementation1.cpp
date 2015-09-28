#include <iostream>
#include <map>
using namespace std;

class BankAccount
{
public:
    BankAccount(int acctNum, const std::string& name)
        : mAcctNum(acctNum), mClientName(name) {}
    void setAcctNum(int acctNum) { mAcctNum = acctNum; }
    int getAcctNum() const { return mAcctNum; }
    void setClientName(const std::string& name) { mClientName = name; }
    std::string getClientName() const { return mClientName; }
protected:
    int mAcctNum;
    std::string mClientName;
};

class BankDB
{
public:
    BankDB() {}
    bool addAccount(const BankAccount& acct);
    void deleteAccount(int acctNum);
    BankAccount& findAccount(int acctNum) throw(std::out_of_range);
    BankAccount& findAccount(const std::string& name) throw(std::out_of_range);
    void mergeDatabase(BankDB& db);
protected:
    std::map<int,BankAccount> mAccounts;
};

bool BankDB::addAccount(const BankAccount& acct)
{
    auto res = mAccounts.insert(make_pair(acct.getAcctNum(), acct));
    return res.second;
}

void BankDB::deleteAccount(int acctNum)
{
    mAccounts.erase(acctNum);
}

BankAccount& BankDB::findAccount(int acctNum) throw(out_of_range)
{
    auto it = mAccounts.find(acctNum);
    if(it == mAccounts.end())
    {
        throw out_of_range("No account with that number.");
    }
    return it->second;
}

BankAccount& BankDB::findAccount(const string& name) throw(out_of_range)
{
    for(auto& p : mAccounts)
    {
        if(p.second.getClientName() == name)
        {
            return p.second;
        }
    }
    throw out_of_range("No account with that name.");
}

void BankDB::mergeDatabase(BankDB& db)
{
    mAccounts.insert(db.mAccounts.begin(), db.mAccounts.end());
    db.mAccounts.clear();
}

int main()
{
    BankDB db;
    db.addAccount(BankAccount(100, "Nicholas Solter"));
    db.addAccount(BankAccount(200, "Scott Kleper"));
    try
    {
        auto acct = db.findAccount(100);
        cout << "Found account 100 : " << acct.getClientName() << endl;
        acct.setClientName("Nicholas A solter");
        cout << "Set client name 100 : " << acct.getClientName() << endl;

        auto acct2 = db.findAccount("Scott Kleper");
        cout << "Found account of Scott Kelper : " << acct2.getAcctNum() << endl;

        auto acct3 = db.findAccount(1000);
    }
    catch(const out_of_range)
    {
        cout << "Unable to find account" << endl;
    }
}
