var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
    // helpers: {
    //     section: function(name, options) {
    //         if(!this._sections) this._sections = {};
    //         this._sections[name] = options.fn(this);
    //         return null;
    //     }
    // }
});
var fortune = require('./lib/fortune.js');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({ extended:true }));

// page test (mocha)
app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' &&
        req.query.test === '1';
    next();
});

app.get('/', function(req,res) {
    res.render('home');
});

// var tours = [
//     {id:0, name:'Hood River', price:99.99},
//     {id:1, name:'Oregon Coast', price:149.95}
// ];

app.get('/about', function(req, res) {
    //res.json(tours);
    res.render('about', {
        fortune: fortune.getFortune(),
        pageTestScript: '/qa/tests-about.js'
    });
});

app.get('/newletter', function(req, res) {
    res.render('newsletter', { csrf: 'CSRF token goes here' });
});

app.post('/process', function(req, res) {
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/thank-you');
})

app.get('/test', function(req, res) {
    res.type('text/plain');
    res.send('this is a test');
})

// 404 handler
app.use(function(req,res) {
    res.status(404);
    res.render('404');
});

// error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:'+
                app.get('port') + '; press Ctrl-C to terminate.');
});
