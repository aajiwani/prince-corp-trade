import { SCREEN } from '@pct_config/navigation_routes';

const user = {
    "division": 1461903,
    "full_name": "Bastiaan Bakker",
    "picture_url": "https://start.exactonline.nl//docs/images/placeholder_contact_myeol.png",
    "user_type": "premium"
};

const division = {
    "division": "1461903",
    "hid": 1,
    "description": "Bastiaan Wholesale Premium",
    "current": true,
    "is_main": false,
    "customer": "7777b41b-675c-444b-963b-25823b5c3f85",
    "customer_code": "11246510",
    "customer_name": "BastiaanWDPremium"
}

const warehouse = {
    "Code": "1",
    "Created": "2016-11-08T02:04:23.247Z",
    "Creator": "99d87844-e4ef-4ac5-968c-fb863eaced16",
    "CreatorFullName": null,
    "Description": "Groot Magazijn",
    "Division": "1461903",
    "EMail": null,
    "ID": "0071bf3a-50f1-4eb9-83d1-34a82740ea83",
    "Main": 1,
    "ManagerUser": null,
    "Modified": "2016-12-15T14:27:29.4Z",
    "Modifier": "d02dcfbc-5dba-4071-8dfd-c149f5f0225a",
    "ModifierFullName": "Bastiaan Bakker",
    "UseStorageLocations": 1
}

const storageLocation = {
    "ID": "c3626a10-b54b-451b-857a-c70bbe53c9b5",
    "Code": "123",
    "Description": "My Best Storage Location Ever!",
    "Warehouse": "0071bf3a-50f1-4eb9-83d1-34a82740ea83",
    "Main": 1,
    "FullName": "123 - My Best Storage Location Ever!"
}

const item = {
    "Item": "c184288f-aa9b-4205-9bec-0a777e2d0ae3",
    "ItemCode": "CHAIR",
    "ItemDescription": "Chair",
    "ItemUnit": "pc      ",
    "ItemUnitDescription": "Piece",
    "Stock": 1,
    "StorageLocation": "c2d6d5d6-be53-4290-bc6f-c9ec52e79f62",
    "StorageLocationCode": "A-1",
    "StorageLocationDescription": "Standaardlocatie",
    "Warehouse": "0071bf3a-50f1-4eb9-83d1-34a82740ea83",
    "WarehouseCode": "1",
    "WarehouseDescription": "Groot Magazijn",
    "PictureUrl": "https://start.exactonline.nl//docs/images/placeholder_item.png",
    "PictureThumbnailUrl": "https://start.exactonline.nl//docs/images/placeholder_item.png",
    "IsBatchItem": 0,
    "IsSerialItem": false
};

function createNavigationParams(screenName, params)
{
  return {
    screenName: screenName,
    screenParams: params
  };
}

let paramsMapping = [
  createNavigationParams(SCREEN.COMPANY, {
    currentDivision: division,
    user: user
  }),
  createNavigationParams(SCREEN.HOME, {
    currentDivision: division,
    user: user
  }),
  createNavigationParams(SCREEN.STOCK_COUNT_SIMPLE, {
    user: user,
    currentDivision : division,
    currentWarehouse : warehouse,
    currentStorageLocation: storageLocation,
    currentItem : item
  }),
  createNavigationParams(SCREEN.STOCK_COUNT_BATCH_UNPLANNED, {
    user: user,
    currentDivision : division,
    currentWarehouse : warehouse,
    currentStorageLocation: storageLocation,
    currentItem : item
  }),
];

export default class AlteredHomeParams
{
  static GetParamsForScreen(screenName)
  {
    var mapping = paramsMapping.filter((mapping) => mapping.screenName.localeCompare(screenName) === 0);
    if (mapping.length > 0)
    {
      return mapping[0].screenParams;
    }
    else
    {
      return {};
    }
  }
}
