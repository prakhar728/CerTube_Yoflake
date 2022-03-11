const router = require('express').Router();
const { collection, addDoc } = require("firebase/firestore");
const { userCollection } = require('../Firebase');

router.post('/', async (req, res) => {
    console.log('This the Playlist URL to be added', req.body.url);

    const userRef = await userCollection.where('uid', '==', req.body.uid).get();
    var requiredUID = ' ';
    var playlistArray = [];
    userRef.forEach(doc => {
        console.log(doc.data());
        if(doc.data().playlist)
        playlistArray=doc.data().playlist;
        requiredUID = doc.id;
    })
    playlistArray.push(req.body.url)
    const result = await userCollection.doc(requiredUID).update({ playlist: playlistArray })

    res.send('Playlist added');
})
module.exports = router;
