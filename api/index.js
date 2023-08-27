const express = require('express');
const apiRoutes = require('./route/apiroutes')
const PORT = +process.env.PORT || 8000;

const app = express();

app.use('/api', apiRoutes);

app.listen(PORT, ()=> {
	console.log("server is started on :",PORT);
})