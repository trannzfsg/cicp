const port = 3000;
const express = require('express');
const app = express();
const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./firebase-admin-service-account.json'); //key deleted, need to regenerate
//initialise firebase adimn service account
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://mycrm-adviser-test.firebaseio.com"
});

//allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//define route
app.get('/', (req, res) => {
	//if no authorization header
	let idToken = req.headers.authorization;
	if (!idToken) {
    return res.status(403).json({ error: 'Authorization header is required!' });
  }
  //verify token
	firebaseAdmin.auth().verifyIdToken(idToken)
  .then( (decodedToken) => {
  	//auth success
    let resobj = {
    	idToken: idToken,
    	decodedToken: decodedToken
    };
		res.send(resobj);
  }).catch( (err) => {
    // Handle error
		res.send(err);
  });
});

//initialise app
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
