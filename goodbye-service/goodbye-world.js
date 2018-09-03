const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('Goodbye world!' );
});
app.listen(3001, () => {
    console.log('Example app listening to port 3001!')
});