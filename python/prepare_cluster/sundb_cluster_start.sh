### 1. ctest.sh clean
### 2. ctest.sh g1n1
### 3. ctest.sh g1n2
### 4. ...
### 5. ctest.sh drive

export PRODUCT_HOME=/home/dplee/work/sundb_trunk
export SUNDB_HOME=$PRODUCT_HOME/Gliese/home
export PATH=$SUNDB_HOME/bin:$PATH

if [ $1 = 'clean' ]; then
    cleandb.sh
    find $SUNDB_HOME -name "*.dbf" -exec rm {} \;
    find $SUNDB_HOME -name "*.log" -exec rm {} \;
    find $SUNDB_HOME -name "*.ctl" -exec rm {} \;
    exit
fi

if [ $# -lt 1 ]; then
    echo "ctest.sh g1n1/g1n2/g2n1/g2n2/drive"
    exit
fi

mount_global()
{
    gsql --as sysdba --dsn=$1 << EOF
        \cstartup local open;
        alter system mount global database;
        \quit;
EOF
    glsnr --start
}

##################################
### (1) cluster non-drive node ###
##################################
if [ $1 = 'g1n1' ]; then
    export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/g1n1_home

    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_DATA --member=g1n1 --host=127.0.0.1 --port=10101
    mount_global $1
##################################
### (2) cluster non-drive node ###
##################################
elif [ $1 = 'g1n2' ]; then
    export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/g1n2_home

    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_DATA --member=g1n2 --host=127.0.0.1 --port=10102
    mount_global $1
##################################
### (3) cluster non-drive node ###
##################################
elif [ $1 = 'g2n1' ]; then
    export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/g2n1_home

    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_DATA --member=g2n1 --host=127.0.0.1 --port=10201
    mount_global $1
##################################
### (4) cluster non-drive node ###
##################################
elif [ $1 = 'g2n2' ]; then
    export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/g2n2_home

    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_DATA --member=g2n2 --host=127.0.0.1 --port=10202
    mount_global $1
fi

##################################
### (5) cluster drive node     ###
##################################
if [ $1 = 'drive' ]; then
    export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/g1n1_home

    # add non-drive node to cluster group and open global database
    gsql --as sysdba --dsn=CLUSTER << EOF
        create cluster group g1 cluster member g1n1 host '127.0.0.1' port 10101;
        alter cluster group g1 add cluster member g1n2 host '127.0.0.1' port 10102;
        create cluster group g2 cluster member g2n1 host '192.168.0.206' port 10201;
        alter system open global database;
        \quit
EOF
    cinit.sh
    glsnr --start
fi
