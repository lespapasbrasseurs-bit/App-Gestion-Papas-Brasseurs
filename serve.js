const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3001;
const dir = __dirname;
const mime = {'.html':'text/html','.jsx':'text/plain','.js':'application/javascript','.css':'text/css','.png':'image/png','.ico':'image/x-icon'};
http.createServer((req,res)=>{
  let p = path.join(dir, req.url==='/'?'index.html':req.url);
  fs.readFile(p,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':mime[path.extname(p)]||'text/plain'});
    res.end(data);
  });
}).listen(port,()=>console.log('Server running on port '+port));
