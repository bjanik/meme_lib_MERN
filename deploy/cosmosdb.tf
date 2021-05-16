resource "azurerm_cosmosdb_account" "cosmos_account" {
    name                = "${var.memelord}-cosmos-account"
    resource_group_name = "${var.rg_name}"
    location            = "${var.region}"
    offer_type          = "Standard"
    kind                = "MongoDB"

    consistency_policy {
        consistency_level = "session"
    }

    geo_location {
        location          = "${var.region}"
        failover_priority = 0
    }

    capabilities {
        name = "mongoEnableDocLevelTTL"
    }

    capabilities {
        name = "MongoDBv3.4"
    }

    capabilities {
        name = "EnableMongo"
    }
}

resource "azurerm_cosmosdb_mongo_database" "cosmosdb" {
    name                = "${var.memelord}-cosmos-database"
    resource_group_name = "${var.rg_name}"
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_collection" "users_collection" {
    name                = "${var.memelord}_users"
    resource_group_name = "${var.rg_name}"
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    database_name       = azurerm_cosmosdb_mongo_database.cosmosdb.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_collection" "memes_collection" {
    name                = "${var.memelord}_memes"
    resource_group_name = "${var.rg_name}"
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    database_name       = azurerm_cosmosdb_mongo_database.cosmosdb.name
    throughput          = 400
}