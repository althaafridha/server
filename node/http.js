/** 
 * Module : HTTP
 * 
 * cara membuat module sederhana dengaan module http
 */

// import module http
const http = require('http')
const server = http.createServer((req, res) => {

    // inisialisasi variable yang digunakan
    let data

    // panggil request yang diteriam oleh server
    console.log(req)

    /**  
     * menampilkan sebuah object dari data
     * object req terdiri dari banyak data, namun yang paling sering dipakai ada 3
     * Yaitu url, method, headers
     */

    data = {
        url: req.url,
        method: req.method,
        header: req.headers

    }
    // set header menjadi JSON
    res.setHeader("Content-Type", "application/json")

    console.log(data)

    res.end(JSON.stringify(data))
})

server.listen(3000)