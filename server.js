let express = require("express");

let app = express();

app.use(express.static('public'));

let server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});