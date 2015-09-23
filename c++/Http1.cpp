#include <iostream>
#include <string>
#include <SFML/Network/Http.hpp>

int main()
{
    sf::Http http;
    std::string output;

    http.setHost("http://stackcanary.com");
    sf::Http::Request request("");
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

    std::cout << "size : " << output.size() << std::endl << output << std::endl;

    return 0;
}
