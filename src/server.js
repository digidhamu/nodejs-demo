const app = require('./index');

let port = 3000;

const server = app.listen(process.env.PORT || port, () => {
	console.log(`Server now up and running on port ${port}`);
});

module.exports = server;
