/**
 * Header HTTP
 * 
 * meneruma otentikasi berupa username dan password
 */
 
// import module http
const http = require('http')
const server = http.createServer((req, res) => {
    // inisiasi variable
    let dataHeader, // menampung object dari header request
    dataAuthorization, // menampung property authorization dari object dataHeader
    splitData, // pemisah value authorization
    dataUser, // menampung value yang berisi kode base64 to  string dari dataUser
    userPass, // menampung hasil dari decode base64 to string dari datauser 
    dataResponse // menampung data yang akan dikirim ke response

    // set Header 
    res.setHeader("Content-Type", "application/json")

    // get Header dari request
    dataHeader = req.headers

    console.log(dataHeader)

    dataAuthorization = dataHeader.authorization

    // jika data ini tidak terdapat authorization kita buat alert
    if(!dataAuthorization){
        dataResponse = {
            data: "Undefined Authorization"
        }
        return res.end(JSON.stringify(dataResponse))
    }

    /**
     * untuk menampilkan format data authorization, (token), (kode Base64)
     */

    // memisahkan string menjadi array dengan batasan spasi
    splitData = dataAuthorization.split(" ")

    // generate kode base64. dia di index 1
    dataUser = splitData[1]

    // convert data user jadi base64
    userPass = Buffer.from(dataUser, "base64").toString()

    dataResponse = {
        token: dataHeader.authorization,
        userPass
    }
    return res.end(JSON.stringify(dataResponse))
})

server.listen(3000)