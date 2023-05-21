FROM scylladb/scylla:5.2

ADD ./cassandra-rackdc.properties.dc1 /etc/scylla/cassandra-rackdc.properties

ENTRYPOINT /docker-entrypoint.py --seeds "${SEEDS}" --smp "${SMP}" --memory "${MEM}" --overprovisioned "${OVERPROV}" --api-address "${API_ADDR}" --listen-address "${ADV_ADDR}" --rpc-address "${ADV_ADDR}" --alternator-address "${ADV_ADDR}"
