##################################################################
# sample
#
##################################################################

CC = gcc
CFLAGS = -g -Wall

INC = -I$(SUNDB_HOME)/include
LFLAGS = -L$(SUNDB_HOME)/lib

LIB = -lsundbesql -lpthread -ldl -lm -lrt
ifeq ($(CSMODE), 1)
    LIB += -lsundbc
else
    ifeq ($(MIXMODE), 1)
        LIB += -lsundb
    else
        LIB += -lsundba
    endif
endif

GPEC = gpec
GPECFLAGS = 

BIN = sun_trig_if

ifneq ($(MAKECMDGOALS), clean)
ifneq ($(MAKECMDGOALS), all)
TARGET = $(MAKECMDGOALS)
OBJECT = $(TARGET).o
C_SRC  = $(TARGET).c
endif
endif

##################################################################
# implicit rules
##################################################################
.SUFFIXES: .gc .c .o

.gc.c:
	$(GPEC) $(GPECFLAGS) $^

.c.o:
	$(CC) $(CFLAGS) -c $(INC) $^

##################################################################
# build rules
##################################################################
NoTarget :
	@echo "Syntax : make {all | clean}"

all :
	$(MAKE) $(BIN)

$(OBJECT) : $(C_SRC)
$(TARGET) : $(OBJECT)
	$(CC) -o $@ $^ $(LFLAGS) $(LIB)

clean :
	rm -rf $(BIN) $(BIN).c *.o *~ core
