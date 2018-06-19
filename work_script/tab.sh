gsql --as sysdba --no-prompt << EOF | grep -v selected
\set colsize 30
\set pagesize 1000
select usage_type, table_name, sharding_strategy from x\$tables@local where table_name like '%$1%' order by usage_type, table_name;
\quit
EOF

gsql --as sysdba --no-prompt << EOF | grep -v selected
\set colsize 30
\set pagesize 1000
select 'PERF VIEW' table_type, table_name from v\$tables@local where table_name like '%$1%' order by table_type, table_name;
\quit
EOF

gsql --as sysdba --no-prompt << EOF | grep -v selected
\set colsize 30
\set pagesize 1000
select table_type, table_name, sharding_strategy, SHARD_PLACEMENT from definition_schema.tables@local where table_name like '%$1%' order by table_type, table_name;
\quit
EOF
