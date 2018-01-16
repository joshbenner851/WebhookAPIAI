"use strict";

const express = require( "express" );
const bodyParser = require( "body-parser" );

const app = express();

const http = require( "http" );
const request = require( "request" );


app.use( bodyParser.urlencoded( {
    extended: true
} ) );

app.use( bodyParser.json() );


app.post( "/growthchart", function( req, res ) {
    const errMsg = "There was an issue finding the wind chill";
    if( req.body.result.action == "GetWindChillAction" ) {
        const cityName = req.body.result.parameters.cityName;

        const URL = "https://openweathermap.org/data/2.5/weather?appid=b6907d289e10d714a6e88b30761fae22&id=4994358&units=imperial";
        console.log(URL);
        const WINDCHILLCOEFFICIENT = .16;
        request.get(
            URL,
            {},
            function( error, response ) {
                if( !error && response.statusCode == 200 ) {
                    const resp = JSON.parse(response.body);
                    const weather = resp.list[0];
                    const temp = weather.main;
                    const currTempFarenheit = temp.temp;
                    const lowTempFarenheit =  temp.temp_min;
                    const highTempFarenheit = temp.temp_max;
                    const windspeed = weather.wind.speed;
                    const windspeedFactor = Math.pow( windspeed, WINDCHILLCOEFFICIENT );

                    const windChillMsg = "The wind chill in " + cityName + " right now is " +
                        calculateWindChill( currTempFarenheit, windspeedFactor ).toPrecision(1) + ". The windchill low today is " +
                        calculateWindChill( lowTempFarenheit, windspeedFactor ).toPrecision(1) + " and high is " +
                        calculateWindChill( highTempFarenheit, windspeedFactor ).toPrecision(1);
                    return res.json( {
                        speech: windChillMsg,
                        displayText: windChillMsg,
                    } );
                } else {
                    return res.json( {
                        speech: errMsg,
                        displayText: errMsg,
                    } );
                }
            }
        );
    }
} );

app.listen( (process.env.PORT || 8000), function() {
    console.log( "Server up and listening" );
} );

function calculateWindChill( tempFarenheit, windspeedFactor ) {
    return 35.74 + 0.6215 * tempFarenheit - 35.75 * windspeedFactor + 0.4275 * tempFarenheit * windspeedFactor;
}
