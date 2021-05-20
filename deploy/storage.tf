
resource "azurerm_storage_account" "storageaccount" {
    name                     = "${var.memelord}storageaccount"
    resource_group_name      = "${var.rg_name}"
    location                 = "${var.region}"
    account_tier             = "Standard"
    account_replication_type = "LRS"
}

resource "azurerm_storage_container" "container" {
    name                    = "memes"
    storage_account_name    = azurerm_storage_account.storageaccount.name
    container_access_type   = "private"
}