# CockroachDB

Note: this does not have any volumes attached. You should attach volumes for production, and use the right cli flags and/or default mount point for the data directory (`/cockroach/cockroach-data`).

## Shell

```
fly ssh console --address 5683d706a6578e.vm.crdb.internal --app crdb -C "/bin/bash"
```

Then run

```
cockroach init --insecure
```

To start the cluster (this only has to be done once per cluster)

```
cockroach node status --insecure
```

To see the status of the nodes, all of them should look the same in the table with different addresses and ids.

## Dashboard

```
fly proxy 8080 --app crdb
```

Then visit `localhost:8080` in the browser
