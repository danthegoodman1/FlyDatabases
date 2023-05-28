terraform {
  required_providers {
    fly = {
      source  = "fly-apps/fly"
      version = "0.0.21"
    }
  }
}

provider "fly" {
  useinternaltunnel    = true
  internaltunnelorg    = "personal"
  internaltunnelregion = "ewr"
}

resource "fly_app" "app" {
  name = "firescroll-test"
  org  = "personal"
}

resource "fly_ip" "exampleIp" {
  app        = fly_app.app.name
  type       = "v4"
  depends_on = [fly_app.app]
}

// https://www.daveperrett.com/articles/2021/08/19/nested-for-each-with-terraform/
locals {
  regions = ["ewr"
  , "arn", "atl", "bog", "bos", "cdg", "den", "dfw", "ams", "eze", "gdl", "gig", "gru", "hkg", "iad", "jnb", "lax", "lhr", "mad", "mia", "nrt", "ord", "otp", "qro", "scl", "sea", "sin", "sjc", "syd", "waw", "yul", "yyz"]
  replica_groups = [
    "rg1"
    # , "rg2", "rg3"
  ]

  # Nested loop over both lists, and flatten the result.
  consumers = distinct(flatten([
    for region in local.regions : [
      for replica_group in local.replica_groups : {
        region        = region
        replica_group = replica_group
      }
    ]
  ]))
}

resource "fly_volume" "vol" {
  for_each = { for entry in local.consumers : "${entry.region}__${entry.replica_group}" => entry }
  name     = each.key
  app      = fly_app.app.name
  size     = 50
  region   = each.value.region
}

output "volumes_json" {
  value = jsonencode({
    for key, volume in fly_volume.vol :
    key => {
      id            = volume.id
      name          = volume.name
      app           = volume.app
      size          = volume.size
      region        = volume.region
      replica_group = element(split("__", volume.name), 1)
    }
  })
}