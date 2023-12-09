const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { color: '#FFFFFF' }); // Initial color (white)
});

app.post('/updateColor', (req, res) => {
    const newColor = req.body.color;
    // Code to send color to ESP8285 goes here

    res.render('index', { color: newColor });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
