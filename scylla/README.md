# ScyllaDB

WIP: Still having issues with ipv6

## Docker image

This docker image will need to be built and uploaded. It contains the configuration files necessary that must be placed on disk. Since fly.io does not have any native mechanism for externally mounting files, we must include in the container image.

The entrypoint is preserved within the fly machine config instead so we can make changes to the CMD without needing to rebuild.

You then need to build the image, and push to fly. You can do `fly auth docker` then push it to your app like `docker push registry.fly.io/scylla-db:5.2` where `scylla-db` is your app name.