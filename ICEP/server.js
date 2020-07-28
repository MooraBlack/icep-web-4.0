const express = require('express');
const path = require('path');
const app = express();
app.us(express.static(_dirname + '/dist/icep'));
app.get('/*', function(req,res){
    res.sendFile(path.join(_dirname+
        '/dist/icep/index.html'));});
app.listen(process.env.PORT || 8080);
