### 1. ctest.sh clean
### 2. ctest.sh g1n1
### 3. ctest.sh g1n2
### 3. ctest.sh g2n1
### 4. ...
### 5. ctest.sh drive g1n1 g1n2 g2n1...

export PRODUCT_HOME=/home/dplee/work/sundb_trunk
export SUNDB_HOME=$PRODUCT_HOME/Gliese/home
export PATH=$SUNDB_HOME/bin:$PATH

if [ $# -lt 1 ]; then
    echo "No argument"
    exit
fi

##################################
### (1) cleandb & kill procs   ###
##################################
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

##################################
### (2) cluster non-drive node ###
##################################
mount_global()
{
    # create db and global mount
    gcreatedb --cluster --db_name=SUNDB --home=$SUNDB_HOME/"$1"_home --member=$1 --host=127.0.0.1 --port=$2
    gsql --as sysdba --dsn=$1 << EOF
        \cstartup local open;
        alter system mount global database;
        \quit;
EOF
    glsnr --start --home=$SUNDB_HOME/"$1"_home
}

if [ `echo "$1" | cut -c 1-1` = 'g' ]; then
    groupno=`echo $1 | cut -c 2-2`
    memberno=`echo $1 | cut -c 4-4`

    port="10""$groupno""0""$memberno"

    mount_global $1 $port
fi

##################################
### (3) cluster drive node     ###
##################################
groupname_list=""
check_already_exist_groupname()
{
    for one in $groupname_list
    do
        if [ $1 = $one ]; then
            return 1
        fi
    done

    return 0
}

get_groupname_list()
{
    # get group name list out of node list
    argcount=$#
    idx=2
    while :
    do
        groupname=`echo ${!idx} | cut -c 1-2`
        if [ $groupname"X" = "X" ]; then
            break;
        else
            check_already_exist_groupname $groupname

            if [ $? -eq 0 ]; then
                groupname_list="$groupname_list"" $groupname"
            fi
        fi

        idx=`expr $idx + 1`
    done
}

member_list=""
get_member_list()
{
    argcount=$#
    idx=2

    while :
    do
        if [ $idx -gt $argcount ]; then
            break;
        else
            member_list="$member_list"" ${!idx}"
        fi

        idx=`expr $idx + 1`
    done
}

check_groupname_list_valid()
{
    if [ "$groupname_list""X" = "X" ]; then
        echo "No group list. You must give all the nodes you already created."
        echo "Try again. exiting..."
        exit
    else
        echo "Group List : $groupname_list"
    fi
}

created_group=""

ret=0
check_group_created()
{
    for one in $created_group
    do
        if [ $one = $1 ]; then
            ret=1
            return
        fi
    done

    ret=0
}

init_cluster()
{
    # dictionary creation for cluster (must use files in standalone dir for standalone)
    gsql --as sysdba --silent --dsn=$1 --import $SUNDB_HOME/admin/cluster/DictionarySchema.sql
    gsql --as sysdba --silent --dsn=$1 --import $SUNDB_HOME/admin/cluster/InformationSchema.sql
    gsql --as sysdba --silent --dsn=$1 --import $SUNDB_HOME/admin/cluster/PerformanceViewSchema.sql

    gsql --as sysdba --dsn=$1 << EOF
        GRANT ALL PRIVILEGES ON DATABASE TO TEST WITH GRANT OPTION;
        COMMIT;
EOF
}

if [ $1 = 'drive' ]; then
    #export SUNDB_DATA=$PRODUCT_HOME/Gliese/home/"$1""_home"

    get_groupname_list $*
    check_groupname_list_valid
    get_member_list $*

    drive_node=""
    first=0

    for group in $groupname_list
    do
        for member in $member_list
        do
            if [ $first -eq 0 ]; then
                drive_node=$member
                first=1
            fi

            if [ $group = `echo $member | cut -c 1-2` ]; then
                groupno=`echo $member | cut -c 2-2`
                memberno=`echo $member | cut -c 4-4`

                port="10""$groupno""0""$memberno"

                check_group_created $group

                if [ $ret -eq 0 ]; then
                    gsql --as sysdba --dsn=$drive_node << EOF
                        create cluster group $group cluster member $member host '127.0.0.1' port $port;
                        \quit
EOF
                    created_group=$created_group" $group"
                else
                    gsql --as sysdba --dsn=$drive_node << EOF
                        alter cluster group $group add cluster member $member host '127.0.0.1' port $port;
                        \quit
EOF
                fi
            fi
        done
    done

    gsql --as sysdba --dsn=$drive_node << EOF
        alter system open global database;
        \quit
EOF

    init_cluster $drive_node
fi
