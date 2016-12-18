#include <Logger.h>

Logger::Logger() : mThreadStarted(false), mExit(false)
{
    mThread = std::thread{&Logger::processEntries, this};

    // logger thread 가 준비될 때까지 대기
    unique_lock<mutex> lock(mMutexStarted);
    mCondVarStarted.wait(lock,[&](){return mThreadStarted == true;});
}

Logger::~Logger()
{
    mExit = true;
    mCondVar.notify_all();
    mThread.join();
}

void Logger::log(const std::string& entry)
{
    // queue 에 log string 을 push 한 후 logger thread 를 깨움
    unique_lock<mutex> lock(mMutex);
    mQueue.push(entry);
    mCondVar.notify_all();
}

void Logger::processEntries()
{
    ofstream ofs("log.txt");
    if( ofs.fail() ) {
        cerr << "failed to open logfile." << endl;
        return;
    }

    unique_lock<mutex> lock(mMutex);

    // logger thread 가 준비되었음을 알림 
    mThreadStarted = true;
    mCondVarStarted.notify_all();

    while(true) {
        // queue 에 push 한 놈이 깨워주길 기다림
        mCondVar.wait(lock);
        lock.unlock();

        while(true) {
            lock.lock();
            if(mQueue.empty()) {
                break;
            }
            else {
                ofs << mQueue.front() << endl;
                mQueue.pop();
            }
            lock.unlock();
        }

        if(mExit) {
            break;
        }
    }
}
