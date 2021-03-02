const path = require('path');
const express = require('express');
const stripe = require('stripe')('sk_test_51IQIfJJfNX1td8eddAo5jfwhbl9s6mFyYGHcQB8JqCpQvwXX2AZiwgtSkdic8cCii9khHqwQFS6oWpktEzze4mf400lXqKri1v');
const compression = require('compression');
const app = express();
app.use(compression());
const publicPath = path.join(__dirname, '..', './build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});