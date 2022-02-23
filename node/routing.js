// Basis Routing

const http = require("http")

const server = http.createServer((req, res) => {
    let url, dataResponse

    res.setHeader("Content-Type", "application/json")

    url = req.url
    
    /**
     * membuat routing yang dibutuhkan sesuai client
     * homepage, login, 404 not found, dll
     */
    if(url === "/"){
        dataResponse = {
            data: "ini adalah Homepage"
        }
    }else if(url.toLowerCase() === "/login"){
        dataResponse = {
            data: "ini adalah halaman Login"
        }
    }else if(url.toLowerCase() === "/register"){
        dataResponse = {
            data: "ini adalah halaman register"
        }
    }else{
        dataResponse = {
            data: "Halaman tidak ditemukan"
        }
    }
    return res.end(JSON.stringify(dataResponse))
})

server.listen(3000)