async function main() {
  const app = "firescroll-test"
  const volumes = JSON.parse("{\"ams__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_0enxv301y21v8okp\",\"name\":\"ams__rg1\",\"region\":\"ams\",\"replica_group\":\"rg1\",\"size\":50},\"arn__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_zmjnv8mk82yrywgx\",\"name\":\"arn__rg1\",\"region\":\"arn\",\"replica_group\":\"rg1\",\"size\":50},\"atl__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_3q80vd3j8xwrgzy6\",\"name\":\"atl__rg1\",\"region\":\"atl\",\"replica_group\":\"rg1\",\"size\":50},\"bog__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_ez1nvxkgw3zrmxl7\",\"name\":\"bog__rg1\",\"region\":\"bog\",\"replica_group\":\"rg1\",\"size\":50},\"bos__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_pkl7vzkmeyzvqg60\",\"name\":\"bos__rg1\",\"region\":\"bos\",\"replica_group\":\"rg1\",\"size\":50},\"cdg__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_n0l9vlp028o4635d\",\"name\":\"cdg__rg1\",\"region\":\"cdg\",\"replica_group\":\"rg1\",\"size\":50},\"den__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_8l524yjq73147zmp\",\"name\":\"den__rg1\",\"region\":\"den\",\"replica_group\":\"rg1\",\"size\":50},\"dfw__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_1q85vg7p3xzvzdxe\",\"name\":\"dfw__rg1\",\"region\":\"dfw\",\"replica_group\":\"rg1\",\"size\":50},\"ewr__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_2en7r1p2o3prk6yx\",\"name\":\"ewr__rg1\",\"region\":\"ewr\",\"replica_group\":\"rg1\",\"size\":50},\"eze__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_2gk9vwel23nv76wm\",\"name\":\"eze__rg1\",\"region\":\"eze\",\"replica_group\":\"rg1\",\"size\":50},\"gdl__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_nylzre2kme3rqmkp\",\"name\":\"gdl__rg1\",\"region\":\"gdl\",\"replica_group\":\"rg1\",\"size\":50},\"gig__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_915grnwey60rn70q\",\"name\":\"gig__rg1\",\"region\":\"gig\",\"replica_group\":\"rg1\",\"size\":50},\"gru__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_g67340k0g22vydxw\",\"name\":\"gru__rg1\",\"region\":\"gru\",\"replica_group\":\"rg1\",\"size\":50},\"hkg__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_915grnwey38rn70q\",\"name\":\"hkg__rg1\",\"region\":\"hkg\",\"replica_group\":\"rg1\",\"size\":50},\"iad__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_8l524yjq7yp47zmp\",\"name\":\"iad__rg1\",\"region\":\"iad\",\"replica_group\":\"rg1\",\"size\":50},\"jnb__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_nylzre2kmg3rqmkp\",\"name\":\"jnb__rg1\",\"region\":\"jnb\",\"replica_group\":\"rg1\",\"size\":50},\"lax__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_xme149k9876vowpl\",\"name\":\"lax__rg1\",\"region\":\"lax\",\"replica_group\":\"rg1\",\"size\":50},\"lhr__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_jn924ok1qdpv03lq\",\"name\":\"lhr__rg1\",\"region\":\"lhr\",\"replica_group\":\"rg1\",\"size\":50},\"mad__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_e628r6gwpkjvwmnp\",\"name\":\"mad__rg1\",\"region\":\"mad\",\"replica_group\":\"rg1\",\"size\":50},\"mia__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_nylzre2kmdlrqmkp\",\"name\":\"mia__rg1\",\"region\":\"mia\",\"replica_group\":\"rg1\",\"size\":50},\"nrt__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_2en7r1p2o5prk6yx\",\"name\":\"nrt__rg1\",\"region\":\"nrt\",\"replica_group\":\"rg1\",\"size\":50},\"ord__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_2en7r1p2o10rk6yx\",\"name\":\"ord__rg1\",\"region\":\"ord\",\"replica_group\":\"rg1\",\"size\":50},\"otp__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_lgz1vpp6zxyv78m3\",\"name\":\"otp__rg1\",\"region\":\"otp\",\"replica_group\":\"rg1\",\"size\":50},\"qro__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_0zy6r7ljq2g4djng\",\"name\":\"qro__rg1\",\"region\":\"qro\",\"replica_group\":\"rg1\",\"size\":50},\"scl__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_d7xkrk7myx64w2q9\",\"name\":\"scl__rg1\",\"region\":\"scl\",\"replica_group\":\"rg1\",\"size\":50},\"sea__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_kgj5450n3g1ry2wz\",\"name\":\"sea__rg1\",\"region\":\"sea\",\"replica_group\":\"rg1\",\"size\":50},\"sin__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_od56vjpq5xzvny30\",\"name\":\"sin__rg1\",\"region\":\"sin\",\"replica_group\":\"rg1\",\"size\":50},\"sjc__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_0o6d42ge3y8v87gy\",\"name\":\"sjc__rg1\",\"region\":\"sjc\",\"replica_group\":\"rg1\",\"size\":50},\"syd__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_2yxp4mn2lx1r63qd\",\"name\":\"syd__rg1\",\"region\":\"syd\",\"replica_group\":\"rg1\",\"size\":50},\"waw__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_podq4qynp3dvg8w1\",\"name\":\"waw__rg1\",\"region\":\"waw\",\"replica_group\":\"rg1\",\"size\":50},\"yul__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_1q85vg7p3d0vzdxe\",\"name\":\"yul__rg1\",\"region\":\"yul\",\"replica_group\":\"rg1\",\"size\":50},\"yyz__rg1\":{\"app\":\"firescroll-test\",\"id\":\"vol_pkl7vzkme79vqg60\",\"name\":\"yyz__rg1\",\"region\":\"yyz\",\"replica_group\":\"rg1\",\"size\":50}}")
  for (const [_, volume] of Object.entries(volumes)) {
    try {
      const res = await createMachine(app, volume.region, volume.replica_group, volume.id)
      console.log("created", res.id)
    } catch (error) {
      console.error("Failed to created instance:", error.message, "... continuing")
    }
  }
  console.log("done")
}

async function createMachine(app, region, replicaGroup, volumeID) {
  const res = await fetch(`https://api.machines.dev/v1/apps/${app}/machines`, {
    headers: {
      "content-type": "application/json",
      "authorization": `Bearer ${process.env.FLY_API_TOKEN}`
    },
    method: "POST",
    body: JSON.stringify({
      "name": `fs-${region}-${replicaGroup}`,
      "region": region,
      "config": {
        "image": "ghcr.io/danthegoodman1/firescroll:latest",
        "size": "performance-2x",
        "env": {
          "DEBUG": "1",
          "PRETTY": "1",
          "NAMESPACE": "testns",
          "REPLICA_GROUP": replicaGroup,
          "INSTANCE_ID": region + "__" + replicaGroup,
          "PARTITIONS": "3",
          "KAFKA_SEEDS": "165.227.176.159:19092",
          "REGION": region
        },
        "services": [
          {
            "ports": [
              {
                "port": 80,
                "handlers": ["http"]
              }
            ],
            "protocol" : "tcp",
            "internal_port" : 8190
          },
          {
            "ports": [
              {
                "port": 8191,
                "handlers": ["http"]
              }
            ],
            "protocol" : "tcp",
            "internal_port" : 8191
          },
        ],
        "mounts": [
          {
            "path": "/var/firescroll/dbs",
            "volume": volumeID
          }
        ],
        "metrics": {
          "port": 8191,
          "path": "/metrics"
        }
      }
    })
  })
  if (res.status > 299) {
    throw new Error(`Error creating machine - status ${res.status}: ${await res.text()}`)
  }
  return await res.json()
}

main()
