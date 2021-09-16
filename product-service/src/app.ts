const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const HOST = 'localhost';
const PORT = 3001;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, HOST, () => {
	console.log(`Server listens http://${HOST}:${PORT}`);
});
