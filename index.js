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
    if( req.body.result.action == "LogObservationAction" ) {
        const student_name = req.body.result.parameters.studentName;
        const category = req.body.result.parameters.category;
        const event = req.body.result.parameters.event;
        const observation = {
              name: [student_name],
              category: [category], 
              event: [event]
        }
        
        request.post(
            "http://dev.api.growthchart.me/observation/" + student_name,
            { json: { observation } },
            function( error, response ) {
                if( !error && response.statusCode == 200 ) {
                    return res.json( {
                        speech: response.body.message,
                        displayText: response.body.message,
                    } );
                } else {
                    return res.json( {
                        speech: "posted but fuck",
                        displayText: "posted but fuck",
                    } );
                }
            }
        );
    }
    
    else {
        return res.json( {
            speech: "Grr",
            displayText: "Grrr",
           
        } );
    }
} );

app.listen( (process.env.PORT || 8000), function() {
    console.log( "Server up and listening" );
} );
