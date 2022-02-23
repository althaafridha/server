/**
 * URL Query String
 * 
 * contoh :
 * URL dari sekedar https://google/com/
 * kemudian kita masukkan keyword Indonesia di kolom pencarian google
 * tetiba URL nya menjadi https://www.google.com/search?q=indonesia
 * 
 * q = key
 * Indonesia = value
 * 
 * digunakan untuk mengirim data ke server dengan method GET
 */

const http = require("http")
const url = require("url")
const querystring = require("querystring")

const server = http.createServer((req, res) => {
    
let urlRequest, // berisi path yang terdapat di request
    urlObj, // berisi url yang telah diproses
    urlQuery, // object dari query
    dataResponse // object dari query yang udah di parsing

res.setHeader("Content-Type", "application/json")

urlRequest = req.url

// convert urlRequest menjadi object
urlObj = url.parse(urlRequest)
console.log(urlObj)

// ambil property yang terdapat dari object url
urlQuery = urlObj.query

if(!urlQuery){
    dataResponse = {
        data: "Query tidak ditemukan"
    }
    return res.end(JSON.stringify(dataResponse))
}
dataResponse = querystring.parse(urlQuery)
return res.end(JSON.stringify(dataResponse))

})

server.listen(3000)


 