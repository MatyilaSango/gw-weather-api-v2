# gw-weather-api-v2
A weather API that provides the weather data in the form of a JSON file.

## Home page
Confirms that the api is running.

## Commands. 
You can get the goe of the endpoints using the Locations endpoint.

| Name | Desciption | Endpoint | Method | Body |
| ---- | ---------| ------ | ---- | -----|
| Home | Home page | /api/v2 | GET ||
| Locations | Locations data | /api/v2/Locations | POST | { "city": "Cape Town" } |
| Today | Today weather data | /api/v2/Today | POST | { "city": "Cape Town", "geo": { "long": "18.543", "lat": "-33.915" } } |
| Hourly | Hourly data for the next 10 hours max | /api/v2/Hourly | POST | { "city": "Cape Town", "geo": { "long": "18.543", "lat": "-33.915" } } |
| Daily | Daily weather data. Day 0 - being the current day, Day 1 - being the next day after today, etc, | /api/v2/Daily | POST | { "city": "Cape Town", "geo": { "long": "18.543", "lat": "-33.915" }, "day": "0" } |
| Mothly | Monthly weather data | /api/v2/Mothly | POST | { "city": "Cape Town", "geo": { "long": "18.543", "lat": "-33.915" } } |

## Deployed on vercel
Link to the api: ['to be added']()
