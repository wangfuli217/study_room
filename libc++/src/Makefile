# source files.
SRC = Clock.cpp Time.cpp ClockImpl.cpp \
      Thread.cpp ThreadImpl.cpp ThreadLocalImpl.cpp \
      String.cpp

OBJ = $(SRC:.cpp=.o)

OUT = ../lib/libcr.a

# include directories
INCLUDES = -I$(HOME)/work/study_room/libc++/include

# C++ compiler flags (-g -O2 -Wall)
#CCFLAGS = -g -O2 -Wall -std=c++11
CCFLAGS = -g -Wall -O0 -std=c++11 

# compiler
CCC = g++

# library paths
LIBS = -lm -lrt

# link flags
LDFLAGS = 

.SUFFIXES: .cpp

.cpp.o:
	$(CCC) $(CCFLAGS) $(INCLUDES) -c $< #-o $@

$(OUT): $(OBJ)
	ar rcs $(OUT) $(OBJ)

clean:
	rm -f $(OBJ) $(OUT)
