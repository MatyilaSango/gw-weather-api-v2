# gw-weather-api-v2
A weather API that provides the weather data in the form of a JSON file.

## Home page
Confirms that the api is running.

## Commands
```/api/v2``` - Home page. <br>
##

Locations data <br>
End point: ```/api/v2/Locations``` <br>
Body: 
```
{
    "city": "Cape Town"
}
``` 
<br>

## 
You can get the goe for the following endpoints using the Locations endpoint.
##

Today's data. <br>
End point: ```/api/v2/Today``` <br>
Body: 
```
{
    "city": "Cape Town",
    "geo": {
        "long": "18.543",
        "lat": "-33.915"
    }
}
``` 
<br>

##

Hourly data for the next 10 hours max <br>
End point: ```/api/v2/Hourly``` <br>
Body: 
```
{
    "city": "Cape Town",
    "geo": {
        "long": "18.543",
        "lat": "-33.915"
    }
}
``` 
<br>

##

Daily Weather data <br>
End point: ```/api/v2/Daily``` <br>
Body: 
```
{
    "city": "Cape Town",
    "geo": {
        "long": "18.543",
        "lat": "-33.915"
    },
    "day": "0"
}
``` 
<br>
0 - being the current day, 1 - being the next day after today, etc,

##

Monthly data <br>
End point: ```/api/v2/Monthly``` <br>
Body: 
```
{
    "city": "Cape Town",
    "geo": {
        "long": "18.543",
        "lat": "-33.915"
    }
}
``` 
<br>

## Deployed on vercel
Link to the api: ['to be added']()
