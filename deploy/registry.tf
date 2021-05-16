resource "azurerm_container_registry" "acr" {
    name                = "${var.memelord}registry"
    resource_group_name = "${var.rg_name}"
    location            = "${var.region}"
    sku                 = "Basic"
    admin_enabled       = true
}