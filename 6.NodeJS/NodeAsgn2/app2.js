/*const express = require('express');

const app = express();

app.get('/year?age=32', (req, res) => {

    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });

    let year = req.params.year;
    let age = req.params.age;
    let msg = `You were born in ${year} and is ${age} years old`;

    res.send(msg);
});

app.listen(3000, () => console.log('Application started on port 3000'));*/


const express = require('express');
const app = express();
var age = 24;
app.get('/year', (req, res) => {
    const year = req.query.year;
    const getFullYear = (year) => {
        var today = new Date();
        var year = today.getFullYear() - age
        /*if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }*/
        return year;
    }
    res.status(200).json({year: getFullYear(year)})
});