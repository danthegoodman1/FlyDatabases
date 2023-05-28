# FlyDatabases

Setting up different databases on fly.io, which is particularly awesome because of the private networking between regions (so you don't have to publicly expose or setup a ton of VPC peering connections).

Please note that these configurations do not always set up best security practices (such as exposing internal ports externally for verification). Change service exposure and configurations as needed for your app. Generally your DB should not be accessible from the internet, and only via internal nodes and VPN/proxy (such as `fly proxy`). 

Yes I revoke my API keys after I commit :)
