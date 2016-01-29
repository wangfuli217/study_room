#ifndef __CDB_H__
#define __CDB_H__


namespace CDB
{

class Error;
class Data;

class ACT
{
public:
    virtual Error ins(Data& d) = 0;
    virtual Error del(Data& d) = 0;
    virtual Error upt(Data& d) = 0;
    virtual Error sel(Data& d) = 0;
};


} // namespace CDB

#endif // __CDB_H__
