const router = require('express').Router();
const { collection, addDoc } = require("firebase/firestore");
const { userCollection } = require('../Firebase');

router.get('/', async (req, res) => {
  console.log('The user id is ', req.body.uid);

  //    const userRef = await userCollection.where('uid','==',req.body.uid).get();
  const userRef = await userCollection.where('uid', '==', req.body.uid).get();
  userRef.forEach(doc => {
    console.log(doc.data());
    res.send(doc.data());
  })
});

router.post('/changeName', async (req, res) => {
  console.log('The user id is ', req.body.uid);
  console.log('The name to be set is', req.body.name);

  const userRef = await userCollection.where('uid', '==', req.body.uid).get();
  var requiredUID = ' ';
  userRef.forEach(doc => {
    console.log(doc.data());
    requiredUID=doc.id;
  })
  const result = await userCollection.doc(requiredUID).update({name:req.body.name})
  res.send('Name updated');
})


module.exports = router;