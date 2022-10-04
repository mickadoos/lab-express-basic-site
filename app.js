const express = require("express");
const app = express();

app.use(express.static('public'));

//home page
app.get('/home', (request, response, next)=> {
    response.sendFile(__dirname + '/views/home.html');
});

//about page
app.get('/about', (request, response, next)=> {
    response.sendFile(__dirname + '/views/about.html');
});

//works page
app.get('/works', (request, response, next)=> {
    response.sendFile(__dirname + '/views/works.html');
});

//gallery photos
app.get('/gallery', (request, response, next)=> {
    response.sendFile(__dirname + '/views/gallery.html');
});


app.listen(3000, ()=> {
    console.log('listening port 3000', __dirname);
});