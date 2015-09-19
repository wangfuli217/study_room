#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <sstream>
using namespace std;

// base class for file error exception
class FileError : public runtime_error
{
public:
    FileError(const string& fileIn) : runtime_error(""), mFile(fileIn) {}
    virtual const char* what() const noexcept { return mMsg.c_str(); }
    string getFileName() const { return mFile; }
protected:
    string mFile, mMsg;
};

// file open exception class
class FileOpenError : public FileError
{
public:
    FileOpenError(const string& fileNameIn);
};

// file read exception class
class FileReadError : public FileError
{
public:
    FileReadError(const string& fileNameIn, int lineNumIn);
    int getLineNum() const { return mLineNum; }
protected:
    int mLineNum;
};

FileOpenError::FileOpenError(const string& fileNameIn) : FileError(fileNameIn)
{
    mMsg = "Unable to open " + fileNameIn;
}

FileReadError::FileReadError(const string& fileNameIn, int lineNumIn)
    : FileError(fileNameIn), mLineNum(lineNumIn)
{
    ostringstream ostr;
    ostr << "Error reading " << fileNameIn << " at line " << lineNumIn;
    mMsg = ostr.str();
}

void readIntegerFile(const string& fileName, vector<int>& dest)
    throw(FileOpenError,FileReadError)
{
    ifstream istr;
    int temp;
    string line;
    int lineNumber = 0;

    istr.open(fileName.c_str());
    if(istr.fail())
    {
	throw FileOpenError(fileName);
    }

    while(!istr.eof())
    {
	getline(istr, line);
	lineNumber++;
	istringstream lineStream(line);

	while(lineStream >> temp)
	{
	    dest.push_back(temp);
	}

	if(!lineStream.eof())
	{
	    istr.close();
	    throw FileReadError(fileName, lineNumber);
	}
    }
    istr.close();
}

int main()
{
    const string fileName = "aa.txt";
    vector<int> myInts;

    try
    {
	readIntegerFile(fileName, myInts);
    }
    catch(const FileError& e)
    {
	cerr << e.what() << endl;
	return 1;
    }

    return 0;
}
