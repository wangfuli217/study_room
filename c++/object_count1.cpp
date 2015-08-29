#include <iostream>
#include <cstdlib>

using namespace std;

// basic class for instance counting
template<class being_counted>
class counted
{
public:
    class too_many_objects{};  // for exception
    static size_t object_count() { return num_objects; }

protected:
    counted();
    counted(const counted& rhs);

    ~counted() { --num_objects; }

private:
    static size_t num_objects;
    static const size_t max_objects;
    void init();
};

template<class being_counted>
counted<being_counted>::counted()
{
    cout << "counted constructor..." << endl;
    init();
}

template<class being_counted>
counted<being_counted>::counted(const counted<being_counted>&)
{
    cout << "counted constructor with an arg..." << endl;
    init();
}

template<class being_counted>
void counted<being_counted>::init()
{
    if(num_objects >= max_objects) throw too_many_objects();
    ++num_objects;
}

class printer:private counted<printer>
{
public:
    static printer * make_printer();
    static printer * make_printer(const printer& rhs);

    ~printer();
    //void submit_job(const printjob& job);
    void reset();
    void perform_self_test();

    using counted<printer>::object_count;
    using counted<printer>::too_many_objects;

private:
    printer();
    printer(const printer& rhs);
};

printer * printer::make_printer()
{
    return new printer;
}

printer * printer::make_printer(const printer& rhs)
{
    return new printer(rhs);
}

int main()
{
    printer * a = printer::make_printer();
}
