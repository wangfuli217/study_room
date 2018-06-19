node_list=""

if [ $# -lt 1 ]; then
    node_list="g1n1 g1n2 g2n1 g2n2 g3n1 g3n2"
else
    if [ $# -ne 2 ]; then
        echo "Usage : $0 group_cnt member_cnt"
        exit
    fi

    group_cnt=$1
    memb_cnt=$2
    gcnt=0
    mcnt=0
    
    while :
    do
        gcnt=`expr $gcnt + 1`
    
        if [ $gcnt -gt $group_cnt ]; then
            break
        fi
    
        while :
        do
            mcnt=`expr $mcnt + 1`
    
            if [ $mcnt -gt $memb_cnt ]; then
                mcnt=0
                break
            else
                node_list=$node_list" "g"$gcnt"n"$mcnt"
            fi
        done
    done
fi

echo "NAME        STATE ARCHLOG_MODE G_COORDI D_COORDI    SCN    "
echo "==========================================================="

for one in $node_list
do
gsql --as sysdba --no-prompt --dsn=$one << EOF | grep "[0-9]" | grep -v selected
select a.cluster_member_name cluster_name,
       a.status,
       b.archivelog_mode mode,
       c.IS_GLOBAL_COORD glo_coord,
       c.IS_DOMAIN_COORD dom_coord,
       c.LOCAL_SCN scn
  from x\$instance@local a,
       x\$archivelog@local b,
       x\$cluster_member@local c,
       (select local_member_id() member_id from dual) d
 where a.cluster_member_name = b.cluster_member_name
   and b.cluster_member_name = c.cluster_member_name
   and c.member_id = d.member_id;
\quit
EOF
done

gsql --as sysdba --no-prompt << EOF | grep "[a-z]"
create table t_test_test (c1 int);
commit;
drop table t_test_test;
commit;
alter system loopback ager;
EOF
