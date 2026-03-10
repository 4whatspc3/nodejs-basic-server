import http from 'http';
import fs from 'fs/promises';

http.createServer((req, res) => {
  
    const fileName = './index.html';

    serveFile(res, fileName);

}).listen(8080);

const serveFile = async (res, fileName) => {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);

        res.end();
    }
    catch (err){
        console.error(err)

        res.writeHead(500);

        res.end('Internal Server Error');
    }
}