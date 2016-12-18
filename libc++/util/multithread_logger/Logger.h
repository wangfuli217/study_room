#ifndef _LOGGER_H_
#define _LOGGER_H_ 1

#include <iostream>
#include <queue>
#include <mutex>
#include <thread>
#include <string>
#include <fstream>
#include <sstream>

using namespace std;

class Logger
{
public:
    Logger();
    virtual ~Logger();
    void log(const std::string& entry);

protected:
    void processEntries();
    bool                    mThreadStarted;
    bool                    mExit;
    std::mutex              mMutex;
    std::condition_variable mCondVar;
    std::queue<std::string> mQueue;
    std::thread             mThread;
    std::mutex              mMutexStarted;
    std::condition_variable mCondVarStarted;

private:
    Logger(const Logger& src);
    Logger& operator=(const Logger& rhs);
};

#endif
