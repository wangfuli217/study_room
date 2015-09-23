#include <iostream>
#include <string>
#include <SFML/Network/Http.hpp>
#include <SFML/System/Clock.hpp>
#include <SFML/System/Time.hpp>

int main()
{
    sf::Http http;
    std::string output;

    http.setHost("http://stackcanary.com");
    sf::Http::Request request("");

    sf::Clock clock;
    
    sf::Http::Response response = http.sendRequest(request);
    sf::Http::Response::Status status = response.getStatus();
    if(status == sf::Http::Response::Ok)
    {
        output = response.getBody();
    }
    else
    {
        std::cout << "Error " << status << std::endl;
    }

    //std::cout << "size : " << output.size() << std::endl << output << std::endl;
    
    sf::Time time1 = clock.getElapsedTime();
    long long micro = time1.asMicroseconds();

    std::cout << micro << std::endl;

    return 0;
}
