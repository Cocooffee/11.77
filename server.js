const http=require('http')

const fs=require('fs')


const server=http.createServer((req,res)=>{

    if(req.url==="/text"){

        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('111221222211144441231231223222')

    }else if(req.url==="/json"){

        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({code:1,list:[1,2,3]}))

    }else if(req.url==="/jpg"){
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        let imgBuf = fs.readFileSync('./1.jpg'); //buffer
        res.end(imgBuf);
    }
})


server.listen(process.env.PORT||3000,()=>{
    console.log("服务器启动成功"+"3000")
})