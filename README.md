# weather-api-v2
A weather API that provides the weather data in the form of a JSON file.

## Home page
Confirms that the api is running.

## Commands
```/api/v2``` - Home page.
##

Locations data
End point: ```/api/v2/today```
Body: ```{"parameter": "Your location"}```
##

Today's data.
End point: ```/api/v2/today```
Body: ```{"parameter": "Your location"}```
##

Hourly data for the next 10 hours max
End point: ```/api/v2/hourly/location``` 
Body: ```{"parameter": "Your location"}```
##

Daily Weather data
End point: ```/api/v2/daily/location/day```
Body: ```{
            "parameter": "Your location", 
            "day": 0
          }
      ```
0 - being the current day, 1 - being the next day after today, etc,

## Deployed on vercel
Link to the api: ['to be added']()
