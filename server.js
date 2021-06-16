const http = require('http');
const mongoClient = require('mongodb').MongoClient

const hostname = '127.0.0.1';
const port = 3000;
const url = 'mongodb+srv://paka9:paka9@cluster0.5nwo2.mongodb.net/Cluster0?retryWrites=true&w=majority';
const dbname = 'Cluster0'

const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('jestem tutaj\n');
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');


//=========DB connection======================================  
mongoClient.connect(url, {}, (error, client) => {
  if (error)
    console.log('Blad z polaczeniem bazy')
  const db = client.db(dbname)

  //=========================do usuniecia, test czy dane sie faktycznie dodadza do bazy
  db.collection('users').insertOne({
    name: 'Paka',
    age: 99
  }, (error, result) => {
    if (error)
      console.log('Blad z dodaniem usera', error)
  })
//==========================================================================
  console.log('Baza polaczona')
})
//=========DB connection======================================  

});

app.get('', checkSignIn, (req, res) => {
    res.render('index');
});

//Login page
app.get('/login', (req, res) => {
    res.render('sign-in');
});

//Register page
app.get('/register', (req, res) => {
    res.render('sign-up');
});

//Gallery page
app.get('/gallery', checkSignIn, (req, res) => {
    res.render('gallery');
});

//Blog page
app.get('/blog', checkSignIn, (req, res) => {
    res.render('blog');
});

//Add post page
app.get('/add',  (req, res) => {
    res.render('form-post');
});