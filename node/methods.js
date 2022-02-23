const http = require("http");

 const server = http.createServer((req, res) => {
    let url, method, dataResponse;

   res.setHeader("Content-Type", "application/json");
 
   url = req.url;
 
   method = req.method ?? "get";

   if (url === "/") {
     dataResponse = {
       data: "Ini adalah Homepage",
     };
   } else if (url.toLowerCase() === "/login") { 
     if (method.toLowerCase() === "post") {
       dataResponse = {
         data: "Anda login dengan method POST",
       };
     } else {
       dataResponse = {
         data: "Ubah method menjadi POST terlebih dahulu",
       };
     }
   } else {
     dataResponse = {
       data: "404 Not Found",
     };
   }
    return res.end(JSON.stringify(dataResponse));
 });
 
 // set port server
 server.listen(3000);