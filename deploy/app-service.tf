resource "azurerm_app_service_plan" "bam_asp" {
    name                = "bam-app-service-plan"
    location            = azurerm_resource_group.rg.location
    resource_group_name = azurerm_resource_group.rg.name
    kind = "Linux"
    reserved = true
    
    sku {
        tier = "Standard"
        size = "B1"
    }
}

resource "azurerm_app_service" "bamapp" {
    name                = "bam-app-service"
    resource_group_name = azurerm_resource_group.rg.name
    location            = azurerm_resource_group.rg.location
    app_service_plan_id = azurerm_app_service_plan.bam_asp.id

    site_config {
        linux_fx_version = "DOCKER|bam_registry/bam_api"
    }

    app_settings = {
        "DOCKER_ENABLE_CI" = true
  }
}