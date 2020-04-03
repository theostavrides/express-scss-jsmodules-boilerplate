const express = require('express');
const app = express();
const port = 3000;
const root = __dirname + /src/;

app.use(express.static(root));

app.get('/', (req, res) => {
	res.sendFile(root + 'templates/index.html');
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));	


