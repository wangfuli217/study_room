#ifndef __SUN_TRIG_IF_H__
#define __SUN_TRIG_IF_H__

#include <string.h>
#include <errno.h>
#include <stdio.h>
#include <time.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>
#include <stdarg.h>
#include <pthread.h>
#include <sys/time.h>
#include <sys/ipc.h>
#include <stdlib.h>
#include <signal.h>
#include <string.h>

enum {
    LOG_CRIT    = 1 << 1 ,
    LOG_ERR     = 1 << 2 ,
    LOG_WARN    = 1 << 3 ,
    LOG_INFO    = 1 << 4 ,
    LOG_DEBUG   = 1 << 5 ,
};

enum
{
    LOG_C   = LOG_CRIT,
    LOG_E   = LOG_ERR,
    LOG_W   = LOG_WARN,
    LOG_I   = LOG_INFO,
    LOG_D   = LOG_DEBUG
};

void DoJob( const char     * aUserName,
            const char     * aPassword,
            int              aCheckInterval,
            int              aDataKeepDay );

int OpenLog (char *aLogFilePrefix, int aLogLevel);

int Log(int aLevel, char *aFormat,...);

void CloseLog();

int Sleep_m(long msec);

void sigh(int signo);

void RegistSignal();

void LogDBError(int aLogLevel, const char * aMsg);

void VarCopy( char       * aArr,
              int        * aLen,
              const char * aSrcStr );

int TryConnectToDB( const char *aHostInfo,
                    const char *aUserID,
                    const char *sPasswd);

void ConnectionToDB( const char     * aHostInfo,
                     const char     * aUserName,
                     const char     * aPassword );

int ProcessWonJang();

void updateFlagDone();

void deleteExpiredWonJangData( int aDataKeepDay );

int checkInterfaceTable();

void DisconDBConnection();

#endif
