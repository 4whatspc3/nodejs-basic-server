import http from 'http';
import fs from 'fs/promises';

http.createServer((req, res) => {
    const myURL = new URL(req.url, `http://${req.headers.host}`);

    if(myURL.pathname === '/favicon.ico'){
        res.writeHead(204);
        res.end();
        return
    }

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
        case '/quote02':
             return './quote02.html';
        case '/quote03':
             return './quote03.html';
        case '/quote04':
             return './quote04.html';
        default:
            return './404.html';
    }
}