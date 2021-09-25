
import http from 'http'
import { read } from 'fs'
const PORT = 3000

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h2>Helo world!</h2>')
    res.end('<i>end</i>')
}).listen(PORT)