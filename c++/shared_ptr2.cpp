#include <memory>

class Car
{
};

void function(std::shared_ptr<Car> _car)
{
    // ...
}

int main()
{
    std::shared_ptr<Car> Car1(new Car());
    std::shared_ptr<Car> Car2(Car1);
    std::shared_ptr<Car> Car3 = Car1;

    function(Car3);

    Car3.reset();

    return 0;
}
