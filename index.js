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
    const errMsg = "There was an issue finding the wind chill"
    if( req.body.result.action == "GetWindChillAction" ) {
        const cityName = req.body.result.parameters.cityName;
        
        request.get(
            "http://samples.openweathermap.org/data/2.5/find?q=" + cityName + "&units=imperial&appid=34cb8b56608a28334436f8924860e73d",
            function( error, response ) {
                if( !error && response.statusCode == 200 ) {
                    return res.json( {
                        speech: response.body.message,
                        displayText: response.body.message,
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
