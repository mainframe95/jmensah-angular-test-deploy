// const express = require('express');
// const path = require('path');
// const ngApp = express();
// ngApp.use(express.static('./dist/angular-forms-validation'));
// ngApp.get('/*', function (request, response) {
//     response.sendFile(path.join(__dirname, '/dist/angular-forms-validation/index.html'));
// });
// ngApp.listen(process.env.PORT || 8080);

//Install express server
const express = require('express');
// Requirement of path Module in order to manage URLS
const path = require('path');
const app = express();
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angherukodeploy'));
app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'/dist/angherukodeploy/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);