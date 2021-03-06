#!/usr/bin/python

import sys,os,commands,signal
import shutil,subprocess,shlex
from subprocess import Popen, PIPE, STDOUT

##############################################
# global variables
##############################################
MAX_GROUP_COUNT = 5
MAX_NODE_COUNT  = 5
group_count = 0
node_count = 0
product_home = None
process_list = [ 'gmaster',
                 'gbalancer',
                 'gserver',
                 'cserver',
                 'gdispatcher',
                 'cdispatcher',
                 'glsnr',
                 'clsnr',
                 'cyclone',
                 'cyclonem' ]

sub_dirs = [ 'admin',
             'backup',
             'conf',
             'html',
             'journal',
             'license',
             'sample',
             'wal',
             'archive_log',
             'bin',
             'db',
             'include',
             'lib',
             'msg',
             'trc' ]

base_shm_key      = 300000
base_shm_addr     = 1610612736
base_cluster_port = 10000
base_listen_port  = 20000
host_addr         = '127.0.0.1'   # This test is only for local host.


##############################################
# common functions
##############################################
def show_usage(prog_name):
    print ""
    print "Usage : %s group_count node_count_per_group" % prog_name
    print ""

def copytree(src, dst, symlinks=False, ignore=None):
    if not os.path.exists(dst):
        os.makedirs(dst)

    for item in os.listdir(src):
        s = os.path.join(src, item)
        d = os.path.join(dst, item)
        if os.path.isdir(s):
            copytree(s, d, symlinks, ignore)
        else:
            if not os.path.exists(d):
                shutil.copy2(s, d)

def kill_processes(plist):
    for proc in plist:
        pgrep_string = 'pgrep ' + '\"^' + proc + '\"'
        pid_list = commands.getoutput(pgrep_string).split('\n')
        if len(pid_list) == 1 and len(pid_list[0]) == 0:
            None
        else:
            for pid in pid_list:
                kill_string  = 'kill -9 ' + pid
                commands.getoutput(kill_string)

def remove_shared_memory(user):
    rmshm_string="ipcs -m | grep `echo " + user + " | cut -c 1-7` | awk '{print \"ipcrm -m \" $2}' | sh -v"
    commands.getoutput(rmshm_string)

def mk_member_name(gidx,nidx):
    return 'G' + str(gidx) + 'N' + str(nidx)

def exec_shell_command(command_string):
    devnull = open('/dev/null', 'w')
    process = Popen(shlex.split(command_string), stdout=devnull)
    retcode = process.wait()
    

##############################################
# check args & environment variables
##############################################
def check_commandline_args():
    global group_count
    global node_count

    if len(sys.argv) < 3:
        show_usage(sys.argv[0])
        sys.exit()

    group_count = int(sys.argv[1]); 
    node_count = int(sys.argv[2]); 

    if group_count > MAX_GROUP_COUNT:
        print "too many group (max : %d)" % MAX_GROUP_COUNT
        sys.exit()

    if node_count > MAX_NODE_COUNT:
        print "too many node (max : %d)" % MAX_NODE_COUNT
        sys.exit()

def check_essential_env():
    global product_home
    product_home = os.getenv('PRODUCT_HOME')
    if product_home == None:
        print "You must set PRODUCT_HOME env"
        sys.exit()
    else:
        None


##############################################
# stop processes & remove old data stuff
##############################################
def remove_old_test_stuff():
    global product_home

    print "==> Stop Procs & Remove Old Data"

    kill_processes(process_list)
    remove_shared_memory(os.getenv('LOGNAME'))
    try:
        os.remove(product_home + '/Cluster/prepare_cluster.odbc.ini')
    except OSError:
        None

    # remove old data dirs
    for i in range(1, group_count+1):
        for j in range(1, node_count+1):
            member_name = mk_member_name(i,j)
            dir_name = product_home + '/Cluster/' + member_name
            print "    [ " + dir_name + " ]"
            try:
                shutil.rmtree(dir_name)
            except OSError:
                None


##############################################
# prepare new dirs and config, etc
##############################################
def modify_config(base_dir, member_name, shmkey, shmaddr, cluster_port, listen_port):
    append_string  = ""
    append_string += "SHARED_MEMORY_STATIC_KEY  = " + str(shmkey)       + "\n"
    append_string += "SHARED_MEMORY_ADDRESS     = " + str(shmaddr)      + "\n"
    append_string += "LOCAL_CLUSTER_MEMBER      = " + "'" + member_name + "'" + "\n"
    append_string += "LOCAL_CLUSTER_MEMBER_HOST = " + "'" + host_addr   + "'" + "\n"
    append_string += "LOCAL_CLUSTER_MEMBER_PORT = " + str(cluster_port) + "\n"
    append_string += "SHARED_SERVERS            = 2"                    + "\n"

    f = open(base_dir + "/" + member_name + "/conf/sundb.properties.conf", "a")
    f.write(append_string)
    f.close()

    append_string  = ""
    append_string += "LISTEN_PORT  = " + str(listen_port)

    f = open(base_dir + "/" + member_name + "/conf/sundb.listener.conf", "a")
    f.write(append_string)
    f.close()

    append_string  = "[" + member_name + "]"      + "\n"
    append_string += "HOST = " + host_addr        + "\n"
    append_string += "PORT = " + str(listen_port) + "\n"
    append_string += "SERVER_MODE = SHARED"       + "\n\n"

    f = open(base_dir + "/" + "prepare_cluster.odbc.ini", "a")
    f.write(append_string)
    f.close()

def prepare_new_test_stuff():
    global product_home
    global group_count
    global node_count

    print "==> Prepare New Data"

    # copy home sub dirs & modify config file
    from_dir = product_home + "/Gliese/home"
    cluster_dir = product_home + '/Cluster'

    for i in range(1, group_count+1):
        for j in range(1, node_count+1):
            member_name = mk_member_name(i,j)

            # copy dirs
            to_dir = cluster_dir + '/' + member_name
            print "    [ " + to_dir + " ]"
            os.mkdir(to_dir)
            for item in sub_dirs:
                shutil.copytree(from_dir+"/"+item, to_dir+"/"+item)

            # modify configs
            count = (i-1)*node_count + j;
            add_value = (i*1000) + (j*100)

            member_name = mk_member_name(i,j)
            shmkey  = base_shm_key + add_value
            shmaddr = base_shm_addr * count
            cluster_port  = base_cluster_port + add_value
            listen_port  = base_listen_port + add_value
            modify_config(cluster_dir, member_name, shmkey, shmaddr, cluster_port, listen_port)


##############################################
# create all cluster dbs
##############################################
def create_new_dbs():
    global product_home

    print "==> Create DB"
    cluster_dir = product_home + '/Cluster'

    # create each members' db
    for i in range(1, group_count+1):
        for j in range(1, node_count+1):
            member_name = mk_member_name(i,j)
            memb_home_dir = cluster_dir + "/" + member_name
            print "    [ " + memb_home_dir + " ]"

            os.environ['SUNDB_HOME'] = memb_home_dir
            os.environ['SUNDB_DATA'] = memb_home_dir
            os.environ['PATH'] = memb_home_dir + "/bin:" + os.environ['PATH']

            # create db
            command_line = 'gcreatedb --cluster --db_name=SUNDB --home=' + memb_home_dir
            exec_shell_command(command_line)


##############################################
# cstartup & mount
##############################################
def global_mount_new_dbs():
    global product_home

    print "==> DB Global Mount"
    cluster_dir = product_home + '/Cluster'

    startup_string = '\cstartup local open\nalter system mount global database;\n\q\n'
    f = open('tmp.sql', "w")
    f.truncate()
    f.write(startup_string)
    f.close()

    # create each members' db
    for i in range(1, group_count+1):
        for j in range(1, node_count+1):
            member_name = mk_member_name(i,j)
            memb_home_dir = cluster_dir + "/" + member_name
            print "    [ " + memb_home_dir + " ]"

            os.environ['SUNDB_HOME'] = memb_home_dir
            os.environ['SUNDB_DATA'] = memb_home_dir
            os.environ['PATH'] = memb_home_dir + "/bin:" + os.environ['PATH']

            # cstartup & mount
            print "     - CStartup & Mount"
            command_line = 'gsql --as sysdba --import tmp.sql'
            exec_shell_command(command_line)

            #p = Popen(['gsql', '--as', 'sysdba'], stdout=PIPE, stdin=PIPE, stderr=STDOUT)
            #output = p.communicate(input=b'\cstartup local open\n\q')[0]
            #print(output.decode())

            print "     - Start Listener"
            command_line = 'glsnr --start --home=' + memb_home_dir
            exec_shell_command(command_line)


##############################################
# prepare cluster group & member, open database
##############################################
def create_cluster_group(gidx,nidx,port):
    global host_addr

    group_name = 'G' + str(gidx)
    member_name = mk_member_name(gidx,nidx)

    create_string = 'create cluster group ' + group_name \
                       + ' cluster member ' + member_name \
                       + ' host \'' + host_addr + '\' port ' + str(port) + ';\n\q\n'
    f = open('tmp.sql', "w")
    f.truncate()
    f.write(create_string)
    f.close()

    command_line = 'gsql --as sysdba --import tmp.sql'
    exec_shell_command(command_line)


def add_cluster_member(gidx,nidx,port):
    global host_addr

    group_name = 'G' + str(gidx)
    member_name = mk_member_name(gidx,nidx)

    add_string = 'alter cluster group ' + group_name \
                  + ' add cluster member ' + member_name \
                  + ' host \'' + host_addr + '\' port ' + str(port) + ';\n\q\n'
    f = open('tmp.sql', "w")
    f.truncate()
    f.write(add_string)
    f.close()

    command_line = 'gsql --as sysdba --import tmp.sql'
    exec_shell_command(command_line)


def open_global_database():
    open_string = 'alter system open global database;\n\q\n'

    f = open('tmp.sql', "w")
    f.truncate()
    f.write(open_string)
    f.close()

    command_line = 'gsql --as sysdba --import tmp.sql'
    exec_shell_command(command_line)
    

def prepare_cluster_open():
    global product_home

    print "==> Create Cluster Groups/Members and Open"

    cluster_dir = product_home + '/Cluster'

    driving_node_dir = cluster_dir + "/" + mk_member_name(1,1)
    os.environ['SUNDB_HOME'] = driving_node_dir
    os.environ['SUNDB_DATA'] = driving_node_dir
    os.environ['PATH'] = driving_node_dir + "/bin:" + os.environ['PATH']

    for i in range(1, group_count+1):
        for j in range(1, node_count+1):
            member_name = mk_member_name(i,j)
            print "    [ " + member_name + " ]"

            add_value = (i*1000) + (j*100)
            cluster_port  = base_cluster_port + add_value

            if j == 1:
                create_cluster_group(i,j,cluster_port)
            else:
                add_cluster_member(i,j,cluster_port)

    open_global_database()


##############################################
# create meta
##############################################
def create_meta():
    print "==> Create Meta"

    global product_home

    cluster_dir = product_home + '/Cluster'
    member_name = mk_member_name(1,1)
    memb_home_dir = cluster_dir + "/" + member_name

    os.environ['SUNDB_HOME'] = memb_home_dir
    os.environ['SUNDB_DATA'] = memb_home_dir
    os.environ['PATH'] = memb_home_dir + "/bin:" + os.environ['PATH']

    command_line = 'gsql --as sysdba --no-prompt --import ' \
                    + memb_home_dir + '/admin/DictionarySchema.sql'
    exec_shell_command(command_line)

    command_line = 'gsql --as sysdba --no-prompt --import ' \
                    + memb_home_dir + '/admin/InformationSchema.sql'
    exec_shell_command(command_line)

    command_line = 'gsql --as sysdba --no-prompt --import ' \
                    + memb_home_dir + '/admin/PerformanceViewSchema.sql'
    exec_shell_command(command_line)

            
##############################################
# main function
##############################################
def main():
    check_commandline_args()
    check_essential_env()

    remove_old_test_stuff()

    prepare_new_test_stuff()
    create_new_dbs()

    global_mount_new_dbs()
    prepare_cluster_open()

    create_meta()

if __name__ == '__main__':
    main()
