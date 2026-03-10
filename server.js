import http from 'http';
import fs from 'fs/promises';

http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);

    const fileName = checkURL(myURL);

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

const checkURL = (myURL) => {

    switch (myURL.pathname) {
        case '/':
            return './index.html';
        case '/quote002':
             return './quote002.html';
        case '/quote003':
             return './quote003.html';
        case '/quote004':
             return './quote004.html';
        default:
            return './404.html';
    }
}