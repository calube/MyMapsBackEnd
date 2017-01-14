const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db 

MongoClient.connect('mongodb://calube:lollypop17@ds163718.mlab.com:63718/mymaps', (err, database) => {
	if (err) return console.log(err)
		db = database 
	app.listen(3000, () => {
		console.log('database connected')
	})
})

// Note: request = req and response = res
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/saveMaps', (req, res) => {
	console.log(req.body)
  db.collection('maps').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.send('saved to database')
  })
})

app.get('/getMaps', (req, res) => {
	var cursor = db.collection('maps').find()
	db.collection('maps').find().toArray(function(err, results) {
    if (err) return console.log(err)

    console.log(results)
	res.json(results)
  })
})

app.post('/saveLocations', (req, res) => {
	console.log("location!")
	console.log(req.body)
  db.collection('locations').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.send('saved to database')
  })
})

app.get('/getLocations', (req, res) => {
	var cursor = db.collection('locations').find()
	db.collection('locations').find().toArray(function(err, results) {
    if (err) return console.log(err)
    console.log(results)
	res.json(results)
  })
})
