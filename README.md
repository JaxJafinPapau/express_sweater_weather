# Sweater Weather

A RESTful JSON API with endpoints that produce weather data to be consumed by a hypothetical front end. It consumes the Dark Sky API for gathering weather data, parses it and returns only what is expected in the project specifications. Location data is parsed from a user friendly city, address, or location by Google Cloud Service's Geocoding API into latitude and longitude. User authentication and location favoriting end points are provided.

This is an introductory project for learning Node.JS and Express.

## Learning Goals
- Utilize a project board to create and track details for project completion
- Practice written technical communication with concise and consistent git commits and clear pull requests
- Familiarize self with mechanics of building an Express API

## Setup
1. clone the repository to your chosen location and `cd` into the project root
2. run `npm install`
3. create a `.env` file with your API keys in the following structure:
   ```
   DARKSKY_API_KEY: "your_key_here"
   GOOGLE_API_KEY: "your_key_here"
   PG_USERNAME: "your_local_postgres_username"
   PG_PASSWORD: "your_local_postgres_password"
   ```
4. create your database with
   - `npx sequelize db:create`
   - `npx sequelize db:migrate`
5. start the server with `npm start`
6. use [Postman](https://www.getpostman.com/) (or similar software) to access the endpoints described below

## Endpoints
 - [Create an Account](#account-creation)
 - [Log In](#login)
 - [Get Weather](#get-weather)

---

### Account Creation

  Create a new user account.

  ##### Requirements

  - Email addresses must be unique. A duplicate email will be prevented from registering, and the API will return with `401 (Unauthorized)`.
  - Password and Password Confirmation must match. Otherwise the API will return with `401 (Unauthorized)`.
  - All fields must be present, and no additional fields should be added. Otherwise the API will return with `400 (Bad Request)`.

  ##### Request

  ```HTTP
  POST /api/v1/users
  Content-Type: application/json
  Accept: application/json
  ```

  ###### Body

  ```json
  {
   "email": "my_email@example.com",
   "password": "password",
   "password_confirmation": "password"
  }
  ```

  ##### Successful Response

  ```HTTP
  HTTP/1.1 201 Created
  ```

  ###### Body

  This will be the user's unique API key for accessing the Sweater Weather API.

  ```json
  {
    "api_key": "randomized_api_key_here"
  }
  ```

---

### Login

  Log in to an existing user account.

  ##### Requirements

  - Email and password must _both_ be present and match an existing user.
  - If incorrect email or password is provided, will return with `401 (Unauthorized)`.
  - All fields must be present, and no additional fields should be added. Otherwise the API will return with `400 (Bad Request)`.

  ##### Request

  ```HTTP
  POST /api/v1/sessions
  Content-Type: application/json
  Accept: application/json
  ```

  ###### Body

  ```json
  {
    "email": "my_email@example.com",
    "password": "password"
  }
  ```

  ##### Successful Response

  ```HTTP
  HTTP/1.1 200 OK
  ```

  ###### Body

  This will be the user's unique API key for accessing the Sweater Weather API.

  ```json
  {
    "api_key": "randomized_api_key_here",
  }
  ```

### Get Weather

GET https://mighty-falls-25575.herokuapp.com/api/v1/forecast?location=denver,co
Content-Type: application/json
Accept: application/json

Response:
```
{
    "data": {
        "id": "0",
        "type": "weather",
        "attributes": {
            "id": 0,
            "current_weather": {
                "summary": "Mostly Cloudy",
                "temperature": 68.69,
                "daily_high": 85,
                "daily_low": 60,
                "location": "Denver, CO",
                "datetime": " 4:24 AM,  7/2",
                "id": 0
            },
            "details": {
                "summary": "Mostly Cloudy",
                "today_forecast": "Foggy tonight.",
                "feels_like": 68.69,
                "humidity": 0.65,
                "visibility": 2.003,
                "uv_index": 0
            },
            "hourly_forecast": [
                {
                    "time": " 4:00 AM",
                    "temperature": 69
                },
                {
                    "time": " 5:00 AM",
                    "temperature": 68
                },
                {
                    "time": " 6:00 AM",
                    "temperature": 67
                },
                {
                    "time": " 7:00 AM",
                    "temperature": 66
                },
                {
                    "time": " 8:00 AM",
                    "temperature": 65
                },
                {
                    "time": " 9:00 AM",
                    "temperature": 63
                },
                {
                    "time": "10:00 AM",
                    "temperature": 62
                },
                {
                    "time": "11:00 AM",
                    "temperature": 60
                }
            ],
            "daily_forecast": [
                {
                    "day": "Saturday",
                    "summary": "Foggy overnight.",
                    "precip_chance": 0.41,
                    "high_temperature": 85,
                    "low_temperature": 60
                },
                {
                    "day": "Saturday",
                    "summary": "Partly cloudy throughout the day.",
                    "precip_chance": 0.22,
                    "high_temperature": 86,
                    "low_temperature": 64
                },
                {
                    "day": "Saturday",
                    "summary": "Partly cloudy throughout the day.",
                    "precip_chance": 0.16,
                    "high_temperature": 88,
                    "low_temperature": 63
                },
                {
                    "day": "Saturday",
                    "summary": "Partly cloudy throughout the day.",
                    "precip_chance": 0.04,
                    "high_temperature": 94,
                    "low_temperature": 65
                },
                {
                    "day": "Saturday",
                    "summary": "Partly cloudy throughout the day.",
                    "precip_chance": 0.04,
                    "high_temperature": 92,
                    "low_temperature": 62
                }
            ]
        }
    }
}
