const express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('express mama tumi jite geco')
})

app.post('/two', (req, res) => {
    res.end('express string method')
})

app.delete('/three', (req, res) => {
    res.status(500).end('Internal server error')
})

app.get('/five', (req, res) => {
    let myArray = [
        {
            name: 'sabbir',
            city: 'Rajshahi',
            Roll: 4,
            Profession: 'Engineer'
        }
    ]

    res.json(myArray).end
})

app.get('/six', (req, res) => {
    res.download('./download/305405498_3674411386118622_1904496529173782417_n (1).jpg')

    app.get('/bangladesh', (req, res) => {
        res.send('hahaha')
    })


})

app.get('/seven', (req, res) => {
    res.append('name', 'sabbir hossen')
    res.append('city', 'Rajshahi')
    res.append('Age', '23')

    res.status(201).end('hello append')
})

app.get('/eight', (req, res) => {
    res.cookie('name', 'cookie')
    res.cookie('header', 'inspect')
    res.cookie('age', '23')
    res.send()
})

app.get('/nine', (req, res) => {
    res.clearCookie('header')
    res.clearCookie('age')
    res.send('cookie is clear')
})

app.listen(5000, function () {
    console.log('express run success');
});

