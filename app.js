const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

var db 
app.set('port', (process.env.PORT || 3000));
console.log('Apps is running and listening to ', app.get('port'))

// //For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });


// MongoClient.connect('mongodb://calube:lollypop17@ds163718.mlab.com:63718/mymaps', (err, database) => {
// 	if (err) return console.log(err)
// 		db = database 
// 	// app.listen(process.env.PORT || 5000, () => {
// 	// 	console.log('database connected')
// 	// })
// 	// app.listen(5000, () => {
// 	// 	console.log('database connected')
// 	// })
// })

// // Note: request = req and response = res
// app.get('/', (req, res) => {
// 	console.log("index works")
// 	res.sendFile(__dirname + '/index.html')
// })

// app.use(bodyParser.urlencoded({extended: true}))

// app.post('/saveMaps', (req, res) => {
// 	console.log(req.body)
//   db.collection('maps').save(req.body, (err, result) => {
//     if (err) return console.log(err)

//     console.log('saved to database')
//     res.send('saved to database')
//   })
// })

// app.get('/getMaps', (req, res) => {
// 	var cursor = db.collection('maps').find()
// 	db.collection('maps').find().toArray(function(err, results) {
//     if (err) return console.log(err)

//     console.log(results)
// 	res.json(results)
//   })
// })

// app.post('/saveLocations', (req, res) => {
// 	console.log("location!")
// 	console.log(req.body)
//   db.collection('locations').save(req.body, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.send('saved to database')
//   })
// })

// app.get('/getLocations', (req, res) => {
// 	var cursor = db.collection('locations').find()
// 	db.collection('locations').find().toArray(function(err, results) {
//     if (err) return console.log(err)
//     console.log(results)
// 	res.json(results)
//   })
// })
