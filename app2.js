//1
console.log("Hola mundo")
//2
const http = require('http');
const fs = require('fs');

//const html = fs.readFileSync("./index.html");
//http.createServer((request, response)=>
//{
//	response.writeHead(200, {"Content-Type":"text/html"});
//	response.write(html);
//	response.end();
//}).listen(8010);


http.createServer((request, response)=>
{
	fs.readFile("./index.html", (err, file)=>{
			response.writeHead(200, {"Content-Type":"text/html"});
			response.write(file);
			response.end();		
	});
}).listen(8010);

//


