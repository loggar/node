var mode = process.env.mode; // 'PRODUCTION', for example

var apiKey = process.env.apiKey; // '38294729347392432'


process.env.mode = 'TESTING';

// Now app code knows not to do destructive transactions!