![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

**Bartender's Companion** is a multi-platform assistant designed to assist professional and home bartenders alike, by giving them tools to manage their stock, setup events and handle orders.

The back-end part features an API which you can access if you wish to create your own front-end.

# Tech Stack

**Mobile web app:** React, TypeScript

**Admin web app:** React, TypeScript

**Back-end:** Node.js, Express, TypeScript

**Database:** MySQL

# API Reference

## v1 (last updated: 26/04/2023)

### Cocktails

#### Get all cocktails from database

```http
GET /api/v1/cocktails
```

| Response code | Description                                |
| :------------ | :----------------------------------------- |
| 200 OK        | Returns a list of all ingredients in stock |

#### Get cocktail by id

```http
GET /api/v1/cocktails/${id}
```

| Parameter | Type      | Description                           |
| :-------- | :-------- | :------------------------------------ |
| `id`      | `integer` | **Required**. Id of cocktail to fetch |

| Response code | Description                                              |
| :------------ | :------------------------------------------------------- |
| 200 OK        | Returns the corresponding cocktail                       |
| 404 Not Found | Id does not correspond to any cocktail from the database |

#### Insert cocktail in database

```http
POST /api/v1/cocktails
```

| Parameter      | Type      | Description                                        |
| :------------- | :-------- | :------------------------------------------------- |
| `name`         | `string`  | **Required**. Cocktail name                        |
| `description`  | `string`  | Cocktail description                               |
| `volume_ml`    | `integer` | **Required**. Volume served                        |
| `is_alcoholic` | `boolean` | **Required**. Does the cocktail contain alcohol ?  |
| `is_vegan`     | `boolean` | **Required**. Does the cocktail fit a vegan diet ? |
| `is_hot`       | `boolean` | **Required**. Is the cocktail served hot ?         |
| `ingredients`  | `string`  | **Required**. List of ingredients used             |
| `instructions` | `string`  | **Required**. How to make the cocktail             |

| Response code   | Description                 |
| :-------------- | :-------------------------- |
| 201 Created     | Ingredient added to stock   |
| 400 Bad Request | Missing required parameters |

#### Update item

```http
PUT /api/v1/cocktails/${id}
```

| Parameter      | Type      | Description                                        |
| :------------- | :-------- | :------------------------------------------------- |
| `id`           | `integer` | **Required**. Id of cocktail to update             |
| `name`         | `string`  | **Required**. Cocktail name                        |
| `description`  | `string`  | Cocktail description                               |
| `volume_ml`    | `integer` | **Required**. Volume served                        |
| `is_alcoholic` | `boolean` | **Required**. Does the cocktail contain alcohol ?  |
| `is_vegan`     | `boolean` | **Required**. Does the cocktail fit a vegan diet ? |
| `is_hot`       | `boolean` | **Required**. Is the cocktail served hot ?         |
| `ingredients`  | `string`  | **Required**. List of ingredients used             |
| `instructions` | `string`  | **Required**. How to make the cocktail             |

| Response code   | Description                               |
| :-------------- | :---------------------------------------- |
| 200 OK          | Cocktail was successfully updated         |
| 400 Bad Request | Missing required parameters               |
| 404 Not Found   | Id doesn't match any cocktail from the DB |

#### Delete item

```http
DELETE /api/v1/stock/${stock_id}/ingredients/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :-------------------------------------- |
| `id`      | `string` | **Required**. Id of ingredient to fetch |

| Response code  | Result                            |
| :------------- | :-------------------------------- |
| 204 No Content | Cocktail was successfully deleted |
| 404 Not Found  | No cocktail match that id         |

## Environment Variables

To run this project, you will need to add the following environment variables.

| Variable name        | Default value        |
| :------------------- | :------------------- |
| **MySQL variables**  |                      |
| `MYSQL_HOST`         | localhost            |
| `MYSQL_DATABASE`     | bartenders-companion |
| `MYSQL_USER`         | bartenders-companion |
| `MYSQL_PASSWORD`     | <none>               |
| **Server variables** |                      |
| `SERVER_HOSTNAME`    | localhost            |
| `SERVER_PORT`        | 1337                 |

## Authors

-   [@CreeperStone72](https://www.github.com/CreeperStone72)

## Acknowledgements

**[The Nerdy Canuck](https://www.youtube.com/@TheNerdyCanuck)**

-   [Restful API with NodeJS, Express & Typescript \[2020\]](https://www.youtube.com/watch?v=vyz47fUXcxU)
-   [Restful API with NodeJS, Express, Typescript & MySQL \[2020\]](https://www.youtube.com/watch?v=eTRSl1As83A)
