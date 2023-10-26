# gis_assessment_node

# GIS_ASSESSMENT_PROJECT

## Overview

This documentation provides an overview of the Express server setup using Node.js. The server utilizes the Express framework and includes a basic routing structure.

## Installation

To run the server, make sure you have Node.js installed. Then, install the required dependencies using:

```bash
npm install express
```

## Code Structure

The server code consists of the following components:

### 1. Dependencies

```javascript
const express = require('express');
const app = express();
const routes = require('./routes');
```

- **express**: The main framework for building the server.
- **app**: An instance of the Express application.
- **routes**: External route definitions.

### 2. Middleware

```javascript
app.use(express.json());
```

- **express.json()**: Middleware to parse incoming JSON requests.

### 3. Routes

```javascript
app.use('/', routes);
```

- Mounts the defined routes from the './routes' module to the root path ('/').

### 4. Server Setup

```javascript
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

- The server listens on port 3000.
- Once the server is started, a log message is displayed.

## Running the Server

Execute the following command to start the server:

```bash
node server.js
```
The server will be accessible at `http://localhost:3000/`.

## Routes

The route definitions are located in the './routes' module. Ensure that your routes are appropriately defined in that file.

Feel free to customize the routes and middleware according to your application's requirements.


Nice set of functions there! Let's document the API:

-----------------------------------------------------------------------------

# Point Data API

## Overview

This documentation outlines the functionality of the Point Data API, which is responsible for managing geographical point data. The API includes endpoints for saving new data, retrieving a list of data, and updating existing data.

## Dependencies

The API relies on a database model named `PointDataModel` from the '../database' module. Ensure that the database connection is properly configured before using the API.

## Endpoints

### 1. Save Data

#### Endpoint: `POST /api/save`

Save geographical point data to the database.

**Request:**
```json
{
  "name": "Sample Point",
  "coordinates": [longitude, latitude]
}
```

- **name (string, required):** The name of the geographical point.
- **coordinates (array, required):** An array containing the longitude and latitude of the point.

**Response:**
- Status Code: 201 (Created)
- Body: "Data saved successfully"

Status Code: 400 (Bad Request) if either `name` or `coordinates` are missing.

Status Code: 500 (Internal Server Error) in case of any server-side issues.

### 2. Get List of Data

#### Endpoint: `GET /api/list`

Retrieve a list of all saved geographical point data.

**Response:**
- Status Code: 200 (OK)
- Body: An array of point data objects.

Status Code: 500 (Internal Server Error) in case of any server-side issues.

### 3. Update Data

#### Endpoint: `PUT /api/update/:id`

Update existing geographical point data based on the specified ID.

**Request:**
```json
{
  "name": "Updated Point",
  "coordinates": [newLongitude, newLatitude]
}
```

- **id (string, path parameter, required):** The ID of the data to be updated.
- **name (string, optional):** The updated name of the geographical point.
- **coordinates (array, optional):** An array containing the new longitude and latitude of the point.

**Response:**
- Status Code: 204 (No Content)
- Body: "Data update successfully"

Status Code: 400 (Bad Request) if the specified ID is not found or if both `name` and `coordinates` are missing.

Status Code: 500 (Internal Server Error) in case of any server-side issues.


Great! Let's document the Polygon Data API alongside the Point Data API:

-------------------------------------------------------------------------------------------------

# Polygon Data API

## Overview

This documentation outlines the functionality of the Polygon Data API, responsible for managing geographical polygon data. Similar to the Point Data API, it includes endpoints for saving new data, retrieving a list of data, and updating existing data.

## Dependencies

The API relies on a database model named `PolygonDataModel` from the '../database' module. Ensure that the database connection is properly configured before using the API.

## Endpoints

### 1. Save Data

#### Endpoint: `POST /api/polygon/save`

Save geographical polygon data to the database.

**Request:**
```json
{
  "name": "Sample Polygon",
  "coordinates": [[[long1, lat1], [long2, lat2], [long3, lat3], [long1, lat1]]]
}
```

- **name (string, required):** The name of the geographical polygon.
- **coordinates (array, required):** An array containing arrays of longitude and latitude pairs forming the polygon.

**Response:**
- Status Code: 201 (Created)
- Body: "Data saved successfully"

Status Code: 400 (Bad Request) if either `name` or `coordinates` are missing.

Status Code: 500 (Internal Server Error) in case of any server-side issues.

### 2. Get List of Data

#### Endpoint: `GET /api/polygon/list`

Retrieve a list of all saved geographical polygon data.

**Response:**
- Status Code: 200 (OK)
- Body: An array of polygon data objects.

Status Code: 500 (Internal Server Error) in case of any server-side issues.

### 3. Update Data

#### Endpoint: `PUT /api/polygon/update/:id`

Update existing geographical polygon data based on the specified ID.

**Request:**
```json
{
  "name": "Updated Polygon",
  "coordinates": [[[newLong1, newLat1], [newLong2, newLat2], [newLong3, newLat3], [newLong1, newLat1]]]
}
```

- **id (string, path parameter, required):** The ID of the data to be updated.
- **name (string, optional):** The updated name of the geographical polygon.
- **coordinates (array, optional):** An array containing arrays of new longitude and latitude pairs forming the updated polygon.

**Response:**
- Status Code: 204 (No Content)
- Body: "Data update successfully"

Status Code: 400 (Bad Request) if the specified ID is not found or if both `name` and `coordinates` are missing.

Status Code: 500 (Internal Server Error) in case of any server-side issues.


---------------------------------------------------------------------------------------------------

# Environment Configuration (.env) 

## Overview

This document provides information on the configuration settings stored in the `.env` file for the GIS Assessment application.

## Database Configuration

### `DB_HOST`

- **Description:** Specifies the host where the database is located.
- **Example Value:** `localhost`

### `DB_NAME`

- **Description:** Represents the name of the database used for the GIS Assessment application.
- **Example Value:** `gis_assessment`

### `DB_USER`

- **Description:** Denotes the username used to connect to the database.
- **Example Value:** `umesh`

### `DB_PASSWORD`

- **Description:** Contains the password required for database access.
- **Example Value:** `umesh@dell`

## Usage

1. **Create the `.env` File:**
   - Create a file named `.env` in the root directory of your GIS Assessment application.

2. **Copy and Paste Configuration:**
   - Copy the provided configuration settings above and paste them into the `.env` file.

3. **Configure Values:**
   - Replace the placeholder values with your actual database configuration details.

   ```env
   DB_HOST=localhost
   DB_NAME=gis_assessment
   DB_USER=umesh
   DB_PASSWORD=umesh@dell
   ```

4. **Secure the File:**
   - Ensure that the `.env` file is kept secure, especially in production environments.
   - Avoid sharing this file in public repositories.

## Notes

- The `.env` file is crucial for managing sensitive information and environment-specific configurations.
- Keep this file secure and do not expose sensitive information unintentionally.

---


# API postman collection link
https://api.postman.com/collections/12790713-d7ad89b5-ccf6-4b96-9a65-7651be24536d?access_key=PMAT-01HDNK1MEHCAJBA7WXA06F7J6Y