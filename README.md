
package.json:
	// "proxy": "http://localhost:3001",

    "test": "LOG_LEVEL=info mocha ./test --exit",
		

## GET Url
* http://localhost:8080/api/score/get

* curl -H "Content-Type:application/json" "http://localhost:3000/api/score/get" 

curl -H "Content-Type:application/json" "http://localhost:3001/api/score/get" 


curl -H "Content-Type:application/json" "http://localhost:8025/api/score/get" 



## POST Url
* curl -i -X POST -H "Content-Type:application/json" http://localhost:3000/api/score/send -d '{"score": 51}'

curl -i -X POST -H "Content-Type:application/json" http://localhost:3001/api/score/send -d '{"score": 51}'


package.json
// "proxy": "http://localhost:3001",

node server, port = 3001

board.action.js
const url = 'http://localhost:3001/api/score/get';

middleware.express.js
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
		next();
	});


Preflight request first sends an HTTP Options request header.


