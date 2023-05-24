FROM scylladb/scylla:5.2

ADD ./cassandra-rackdc.properties.dc1 /etc/scylla/cassandra-rackdc.properties
ADD ./scylla.yaml /etc/scylla/scylla.yaml

ENTRYPOINT /docker-entrypoint.py --seeds "${SEEDS}" --smp "${SMP}" --memory "${MEM}" --overprovisioned "${OVERPROV}" --api-address "${API_ADDR}" --listen-address "${API_ADDR}" --rpc-address "${API_ADDR}" --alternator-address "${API_ADDR}" --broadcast-address "${ADV_ADDR}" --broadcast-rpc-address "${ADV_ADDR}"
