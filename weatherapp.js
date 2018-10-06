const request = require('request');
const fs = require('fs');


let key = 'AIzaSyAc5ZmdMcI6gN6RDbuQrNm7y2RA1BqOIGA'
request({
    json: true,    
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1660+Amphitheatre+Parkway,+Mountain+View,+CA&key='+key,
}, function (error, response, body) {
    if (!error && response.statusCode==200){
        console.log(JSON.stringify(body, undefined, 2));
    }
})