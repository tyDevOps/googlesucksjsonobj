const request = require('request');
let key = 'AIzaSyC_kGpHijcVcfwN-DAllHyKEt04z470c2I'
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='+key,
    json: true,    
}, function (error, response, body) {
    if (!error && response.statusCode==200){
        console.log(JSON.stringify(body, undefined, 2));
    }
})