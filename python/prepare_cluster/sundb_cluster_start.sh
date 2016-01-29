if [ $# -lt 1 ]; then
    echo "ctest.sh drive1/drive2/node"
    exit
fi

### (1) cluster drive node ###
if [ $1 = 'drive1' ]; then
    # create db & cluster group
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_HOME/g1n1_home --member=g1n1 --host=127.0.0.1 --port=10101
    gsql --as sysdba --dsn=CLUSTER << EOF
        \cstartup local open;
        alter system mount global database;
        create cluster group g1 cluster member g1n1 host '127.0.0.1' port 10101;
        \quit
EOF
### (2) cluster non-drive node ###
elif [ $1 = 'node' ]; then
    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_HOME/g1n2_home --member=g1n2 --host=127.0.0.1 --port=10102
    gsql --as sysdba --dsn=CLUSTER << EOF
        \cstartup local open;
        alter system mount global database;
        \quit;
EOF
fi

### (3) cluster drive node ###
if [ $1 = 'drive2' ]; then
    # add non-drive node to cluster group and open global database
    gsql --as sysdba --dsn=CLUSTER << EOF
        alter cluster group g1 add cluster member g1n2 host '192.168.0.206' port 10102;
        alter system open global database;
        \quit
EOF
    cinit.sh
    glsnr --start
fi
