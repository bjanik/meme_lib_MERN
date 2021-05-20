resource "azurerm_app_service_plan" "asp" {
    name                = "${var.memelord}-app-service-plan"
    resource_group_name = "${var.rg_name}"
    location            = "${var.region}"
    kind = "Linux"
    reserved = true
    
    sku {
        tier = "Standard"
        size = "B1"
    }
}

resource "azurerm_app_service" "memelordapp" {
    name                = "${var.memelord}-api"
    resource_group_name = "${var.rg_name}"
    location            = "${var.region}"
    app_service_plan_id = azurerm_app_service_plan.asp.id

    site_config {
        linux_fx_version = "DOCKER|${azurerm_container_registry.acr.login_server}/${var.memelord}_api"
        always_on        = "true"
        cors {
            allowed_origins = ["*"]
        }
    }

    app_settings = {
        "DOCKER_ENABLE_CI"                = true
        "MONGO_COLLECTION_USERS"          = azurerm_cosmosdb_mongo_collection.users_collection.name
        "MONGO_COLLECTION_MEMES"          = azurerm_cosmosdb_mongo_collection.memes_collection.name
        "MONGODB_URI"                     = azurerm_cosmosdb_account.cosmos_account.connection_strings[0]
        "AZURE_STORAGE_CONNECTION_STRING" = azurerm_storage_account.storageaccount.primary_connection_string
        "DOCKER_REGISTRY_SERVER_URL"      = azurerm_container_registry.acr.login_server
        "DOCKER_REGISTRY_SERVER_USERNAME" = azurerm_container_registry.acr.admin_username
        "DOCKER_REGISTRY_SERVER_PASSWORD" = azurerm_container_registry.acr.admin_password
  }
}