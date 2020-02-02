const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Helllllooo boys');
});

app.get('/demo', (req, res) => {
	res.set({ 'X-Rated': 'Buttons' });
	res.status(418);
	res.send('And girls too')
});

app.listen(port, () => {
	console.log('App listening on port ', port);
});
