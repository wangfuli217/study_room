##################################################################
# sample
#
##################################################################

CC = gcc
CFLAGS = -g -Wall

INC = -I$(SUNDB_HOME)/include
LFLAGS = -L$(SUNDB_HOME)/lib

#LIB = -lsundbesql -lpthread -ldl -lm -lrt -lsundba
LIB = -lsundbesql -lsundba -lpthread -ldl -lm -lrt

GPEC = gpec
GPECFLAGS = 

BIN = vl_trace

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
