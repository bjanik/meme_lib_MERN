resource "azurerm_app_service_plan" "asp" {
    name                = "${var.rg_name}-app-service-plan"
    location            = azurerm_resource_group.rg.location
    resource_group_name = azurerm_resource_group.rg.name
    kind = "Linux"
    reserved = true
    
    sku {
        tier = "Standard"
        size = "B1"
    }
}

resource "azurerm_app_service" "memelordapp" {
    name                = "${var.rg_name}-app-service"
    resource_group_name = azurerm_resource_group.rg.name
    location            = azurerm_resource_group.rg.location
    app_service_plan_id = azurerm_app_service_plan.asp.id

    site_config {
        linux_fx_version = "DOCKER|${azurerm_container_registry.acr.name}/${var.rg_name}_api"
        cors {
            allowed_origins = ["*"]
        }
    }

    app_settings = {
        "DOCKER_ENABLE_CI"                = true
        "MONGO_COLLECTION_USER"           = azurerm_cosmosdb_mongo_collection.users_collection.name
        "MONGO_COLLECTION_MEMES"          = azurerm_cosmosdb_mongo_collection.memes_collection.name
        "MONGODB_URI"                     = azurerm_cosmosdb_account.cosmos_account.connection_strings[0]
        "AZURE_STORAGE_CONNECTION_STRING" = azurerm_storage_account.storageaccount.primary_connection_string
        "DOCKER_REGISTRY_SERVER_URL"      = azurerm_container_registry.acr.login_server
  }
}