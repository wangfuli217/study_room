#================================================================
# Setting Variables
#================================================================

CC   = gcc
CPP  = g++
BINS = emp database user_inter

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

emp : Employee.o EmployeeTest.o
	#$(CC) $(CFLAGS) -o $@ $< $(LIBS)
	$(CPP) $(CFLAGS) -o $@ Employee.o EmployeeTest.o $(LIBS)

database : Employee.o Database.o DatabaseTest.o
	$(CPP) $(CFLAGS) -o $@ Employee.o Database.o DatabaseTest.o $(LIBS)

user_inter : Employee.o Database.o UserInterface.o
	$(CPP) $(CFLAGS) -o $@ Employee.o Database.o UserInterface.o $(LIBS)

#================================================================
# C++ Ex
#================================================================
echo :
	@echo "LIBMODE="$(LIBMODE)
