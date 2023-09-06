# weather-api-v2
A weather API that provides the weather data in the form of a JSON file.

## Home page
Confirms that the api is running.

## Commands
```/api/v2``` - Home page. <br>
##

Locations data <br>
End point: ```/api/v2/today``` <br>
Body: ```{ "parameter": "Your location" }``` <br>
##

Today's data. <br>
End point: ```/api/v2/today``` <br>
Body: ```{ "parameter": "Your location" }``` <br>
##

Hourly data for the next 10 hours max <br>
End point: ```/api/v2/hourly/location``` <br>
Body: ```{ "parameter": "Your location" }``` <br>
##

Daily Weather data <br>
End point: ```/api/v2/daily/location/day``` <br>
Body: ```{ "parameter": "Your location", "day": 0 }``` <br>
0 - being the current day, 1 - being the next day after today, etc,

## Deployed on vercel
Link to the api: ['to be added']()
