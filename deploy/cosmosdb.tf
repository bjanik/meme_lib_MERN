resource "azurerm_cosmosdb_account" "cosmos_account" {
    name                = "${var.rg_name}-cosmos-account"
    resource_group_name = azurerm_resource_group.rg.name
    location            = azurerm_resource_group.rg.location
    offer_type          = "Standard"
    kind                = "MongoDB"

    consistency_policy {
        consistency_level = "session"
    }

    geo_location {
        location          = azurerm_resource_group.rg.location
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
    name                = "${var.rg_name}-cosmos-database"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_collection" "users_collection" {
    name                = "${var.rg_name}_users"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    database_name       = azurerm_cosmosdb_mongo_database.cosmosdb.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_collection" "memes_collection" {
    name                = "${var.rg_name}_memes"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    database_name       = azurerm_cosmosdb_mongo_database.cosmosdb.name
    throughput          = 400
}