resource "azurerm_cosmosdb_account" "cosmos_account" {
    name                = "bam-cosmos-account"
    resource_group_name = azurerm_resource_group.rg.name
    location            = azurerm_resource_group.rg.location
    offer_type          = "Standard"

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

resource "azurerm_cosmosdb_mongo_database" "cosmos_db" {
    name                = "bam-cosmos-database"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_database" "cosmos_user_collection" {
    name                = "bam-cosmos-user-collection"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    throughput          = 400
}

resource "azurerm_cosmosdb_mongo_database" "cosmos_meme_collection" {
    name                = "bam-cosmos-meme-collection"
    resource_group_name = azurerm_resource_group.rg.name
    account_name        = azurerm_cosmosdb_account.cosmos_account.name
    throughput          = 400
}