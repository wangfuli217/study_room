#================================================================
# Setting Variables
#================================================================

CC   = gcc
CPP  = g++
BINS = Spreadsheet

LIBMODE=debug

ifneq ($(LIBMODE),debug)
CFLAGS = -g3 -O3 -I. -Wall -std=c++11
LIBS   = -lpthread
else
CFLAGS = -g3 -O0 -I. -Wall -std=c++11
LIBS   = -lpthread
endif

ifneq ($(WINDIR),)
CFLAGS+= -D_GDL_NET
endif

all : $(BINS)
debug : $(BINS)

.SUFFIXES :
.SUFFIXES : .c .cpp .o

.c.o :
	$(CC) $(CFLAGS) -c $<

.cpp.o :
	$(CPP) $(CFLAGS) -c $<

clean:
	@rm -f $(BINS) *.o *.exe


#================================================================
# Building binaries
#================================================================

Spreadsheet : Spreadsheet.o SpreadsheetCell.o
	#$(CC) $(CFLAGS) -o $@ $< $(LIBS)
	$(CPP) $(CFLAGS) -o $@ SpreadSheet.o SpreadsheetCell.o $(LIBS)

#================================================================
# C++ Ex
#================================================================
echo :
	@echo "LIBMODE="$(LIBMODE)
