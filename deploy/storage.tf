
resource "azurerm_storage_account" "storageaccount" {
    name                     = "${var.rg_name}storageaccount"
    resource_group_name      = azurerm_resource_group.rg.name
    location                 = azurerm_resource_group.rg.location
    account_tier             = "Standard"
    account_replication_type = "LRS"
}

resource "azurerm_storage_container" "container" {
    name                    = "memes"
    storage_account_name    = azurerm_storage_account.storageaccount.name
    container_access_type   = "private"
}