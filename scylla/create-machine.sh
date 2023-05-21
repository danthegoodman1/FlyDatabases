curl -i -X POST \
-H "Authorization: Bearer ${FLY_API_TOKEN}" -H "Content-Type: application/json" \
"${FLY_API_HOSTNAME}/v1/apps/user-functions/machines" \
-d '{
  "name": "scylla-0",
  "config": {
    "image": "scylladb/scylla:5.2",
    "services": [
      {
        "ports": [
          {
            "port": 9160
          }
        ],
        "protocol": "tcp",
        "internal_port": 9160
      },
      {
        "ports": [
          {
            "port": 9042
          }
        ],
        "protocol": "tcp",
        "internal_port": 9042
      },
      {
        "ports": [
          {
            "port": 9142
          }
        ],
        "protocol": "tcp",
        "internal_port": 9142
      }
    ],
    "checks": {
      "tcpcheck": {
        "type": "tcp",
        "port": 9042,
        "interval": "15s",
        "timeout": "10s"
      }
    }
  }
}'
