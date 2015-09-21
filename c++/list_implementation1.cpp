#include <list>
#include <string>
#include <vector>
using namespace std;

list<string>
getTotalEnrollment(const vector<list<string>>& courceStudents,
		   const list<string>& droppedStudents)
{
    list<string> allStudents;
    for(auto& lst : courceStudents)
    {
	allStudents.insert(allStudents.end(), lst.begin(), lst.end());
    }

    allStudents.sort();
    allStudents.unique();

    for(auto& str : droppedStudents)
    {
	allStudents.remove(str);
    }

    return allStudents;
}

int main()
{
}
