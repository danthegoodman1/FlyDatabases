# FireScroll 32 Region Example

Shamelessly plugging [https://github.com/danthegoodman1/firescroll](https://github.com/danthegoodman1/firescroll)

This example specifically shows how to automate creating many nodes with terraform, with each node containing the entire dataset.

If you would like to partition further than this 3x3 (3 nodes, each with all 3 partitions) example, then you will need to set up a script to go back and edit them with gossip seeds like the ScyllaDB and CRDB examples.

For setting up Kafka, I had run a single broker with their quickstart docker compose file: [https://docs.redpanda.com/docs/get-started/quick-start/](https://docs.redpanda.com/docs/get-started/quick-start/)