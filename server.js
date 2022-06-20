const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]) {
        res.json(rappers[rapperName])
        console.log(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
        console.log(rappers[rapperName])
    }
})

app.post('/main.js', (req, res) => {
    rappers
        .push()
        // .then((result) => {
        // 	res.redirect('/')
        // })
        .catch((error) => console.error(error))
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!`)
})
