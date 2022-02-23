/**
 *
 * Request Body
 *
 * learn parsing data body dari request
 *
 */
/**
 * bentuk transaksi client ada 2 yaitu upload dan download
 *
 *  Stream adalah seluruh kegiatan transaksi data dari awal sampai selesai, yakni:
 *      1. Mulai dari inisiasi data pada tujuan
 *      2. Pemisahan data yang akan dikirim menjadi bagian kecil (chunks)
 *      3. Pengiriman data chunks ke tujuan disebut dengan Buffering
 *      4. Setelah data selesai dibuffer semua, proses data agar menjadi utuh kembali
 *
 */

const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  let urlReq, methodReq, dataRequest;

  const chunkArr = [];
  const dataResponse = {};

  res.setHeader("Content-Type", "application/json");

  urlReq = req.url;
  methodReq = req.method ?? "get";

  if (urlReq.toLowerCase() === "/login") {
    if (methodReq.toLowerCase() === "get") {
      dataResponse.data = "ini adalah halaman login";
    } else if (methodReq.toLowerCase() === "post") {
      req.on("data", (chunk) => {
        chunkArr.push(chunk);
      });
    } else {
      dataResponse.data = "Hanya menerima method GET dan POST";
    }
  } else {
    dataResponse.data = "Gunakan endpoint /login";
  }
  req.on("end", () => {
    if (chunkArr.length !== 0) {
      dataRequest = Buffer.concat(chunkArr).toString();

      console.log(dataRequest);

      let requestObj = querystring.parse(dataRequest);
      dataResponse.data = requestObj;
    }
    return res.end(JSON.stringify(dataResponse));
  })
  
})

server.listen(5000)