const express = require('express');
app = express();

app.get('/', (req, res) => {
    res.send('express mama tumi jite geco')
})

app.listen(8080, function () {
    console.log('express run success');
})