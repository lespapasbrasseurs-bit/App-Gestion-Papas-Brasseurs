const http = require('http');
const fs   = require('fs');
const path = require('path');

const port      = process.env.PORT || 3001;
const dir       = __dirname;
const DATA_FILE = path.join(dir, 'ppb_data.json');
const LOCK_FILE = path.join(dir, 'ppb_lock.json');
const LOCK_TTL  = 2 * 60 * 1000; // 2 min sans ping = session morte

const mime = {'.html':'text/html','.jsx':'text/plain','.js':'application/javascript',
              '.css':'text/css','.png':'image/png','.ico':'image/x-icon'};

function readJson(file){
  try{ return JSON.parse(fs.readFileSync(file,'utf8')); }catch{ return null; }
}
function writeJson(file,data){
  fs.writeFileSync(file, JSON.stringify(data,null,2));
}
function json(res,data,status=200){
  res.writeHead(status,{'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
  res.end(JSON.stringify(data));
}
function body(req){
  return new Promise(resolve=>{
    let b='';
    req.on('data',c=>b+=c);
    req.on('end',()=>{ try{resolve(JSON.parse(b));}catch{resolve({});} });
  });
}

http.createServer(async(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS'){ res.writeHead(204); res.end(); return; }

  // ── /api/data : lecture / écriture des données ────────────
  if(req.url==='/api/data' && req.method==='GET'){
    const d=readJson(DATA_FILE);
    return json(res, d||{savedAt:null,data:null});
  }
  if((req.url==='/api/data'||req.url==='/api/data-beacon') && req.method==='POST'){
    const b2=await body(req);
    const ts=new Date().toISOString();
    writeJson(DATA_FILE,{...b2, savedAt:ts});
    return json(res,{ok:true,savedAt:ts});
  }

  // ── /api/lock : verrou de session ─────────────────────────
  if(req.url==='/api/lock' && req.method==='GET'){
    const lock=readJson(LOCK_FILE);
    if(!lock) return json(res,{locked:false});
    const stale=Date.now()-new Date(lock.lastPing).getTime()>LOCK_TTL;
    if(stale) return json(res,{locked:false,stale:true});
    return json(res,{locked:true,...lock});
  }
  if(req.url==='/api/lock' && req.method==='POST'){
    const b2=await body(req);
    const now=new Date().toISOString();
    const existing=readJson(LOCK_FILE);
    const age=existing?Date.now()-new Date(existing.lastPing).getTime():Infinity;
    const owned=!existing||age>LOCK_TTL||existing.machineId===b2.machineId||b2.force;
    if(owned){
      const lock={machine:b2.machine, machineId:b2.machineId,
        since:existing?.machineId===b2.machineId?existing.since:now, lastPing:now};
      writeJson(LOCK_FILE,lock);
      return json(res,{ok:true,lock});
    }
    return json(res,{ok:false,conflict:true,lock:existing},409);
  }
  if(req.url==='/api/lock' && req.method==='DELETE'){
    const b2=await body(req);
    const existing=readJson(LOCK_FILE);
    if(existing?.machineId===b2.machineId){
      try{fs.unlinkSync(LOCK_FILE);}catch{}
    }
    return json(res,{ok:true});
  }

  // ── Fichiers statiques ─────────────────────────────────────
  const p=path.join(dir, req.url==='/'?'index.html':req.url);
  fs.readFile(p,(err,data)=>{
    if(err){ res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200,{'Content-Type':mime[path.extname(p)]||'text/plain'});
    res.end(data);
  });

}).listen(port,()=>console.log(`PPB Gestion — http://localhost:${port}`));
