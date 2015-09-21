#include <iostream>
#include <queue>
using namespace std;

template<typename T>
class PacketBuffer
{
public:
    PacketBuffer(size_t maxSize = 0);
    bool bufferPacket(const T& packet);
    T getNextPacket() throw(std::out_of_range);
protected:
    std::queue<T> mPackets;
    int mMaxSize;
};

template<typename T>
PacketBuffer<T>::PacketBuffer(size_t maxSize)
    :mMaxSize(maxSize)
{
}

template<typename T>
bool PacketBuffer<T>::bufferPacket(const T& packet)
{
    if(mMaxSize > 0 && mPackets.size() == mMaxSize)
    {
	return false;
    }
    mPackets.push(packet);
    return true;
}

template<typename T>
T PacketBuffer<T>::getNextPacket() throw(std::out_of_range)
{
    if(mPackets.empty())
    {
	throw std::out_of_range("Buffer is empty");
    }

    T temp = mPackets.front();
    mPackets.pop();
    return temp;
}

// packet to be saved
class IPPacket
{
public:
    IPPacket(int id) : mID(id) {}
    int getID() const { return mID; }
protected:
    int mID;
};

int main()
{
    PacketBuffer<IPPacket> ipPackets(3);
    for(int i=1; i<=4; ++i)
    {
	if(!ipPackets.bufferPacket(IPPacket(i)))
	    cout << "Packet " << i << " dropped (queue is full))." << endl;
    }

    while(true)
    {
	try
	{
	    IPPacket packet = ipPackets.getNextPacket();
	    cout << "Processing packet " << packet.getID() << endl;
	}
	catch(const out_of_range&)
	{
	    cout << "Queue is empty." << endl;
	    break;
	}
    }

    return 0;
}
