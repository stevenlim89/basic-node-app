var express = require('express'),
    app = express();

// set views directory
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home');
});

// Specify port you want to connect to
var port = 5000;

app.listen(port, (req, res) => {
	console.log(`Listening on port ${port}`);
});