const router = require('express').Router();
const { collection, addDoc } = require("firebase/firestore");
const { userCollection } = require('../Firebase');

router.post('/', async (req, res) => {
    console.log('This the certificate URL to be added', req.body.url);
    const userRef = await userCollection.where('uid', '==', req.body.uid).get();
    var requiredUID = ' ';
    var certificateArray = [];
    userRef.forEach(doc => {
        console.log(doc.data());
        if(doc.data().certificates)
        certificateArray=doc.data().certificates;
        requiredUID = doc.id;
    })
    certificateArray.push(req.body.url)
    const result = await userCollection.doc(requiredUID).update({ certificates: certificateArray })

    res.send('Certificate Added');
})
module.exports = router;
