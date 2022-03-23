const express = require('express');
const HealthCheck = require('./routes/HealthCheck');
const userInfoRoute=require('./routes/UserInfo');
const playlistUpdateRoute = require('./routes/PlayListUpdate');
const addCertificateRoute = require('./routes/AddCertificate');
const cors= require('cors');

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());
app.use('/getUserFromId',userInfoRoute);
app.use('/healthCheck',HealthCheck);
app.use('/updatePlaylist',playlistUpdateRoute);
app.use('/addCertificate',addCertificateRoute);

app.listen(PORT,()=>{
    console.log(`Server is Open on PORT:${PORT}` );
}
)