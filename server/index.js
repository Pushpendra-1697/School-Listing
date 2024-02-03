const http = require("http");
const express = require("express");
const app = express();
const httpServer = http.createServer(app); //server creation by http inbuit node module;
const { connection } = require("./Configs/Config");
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 3000; //defined port 8080 (default 3000) excluding 27017 (reserved port by Mongodb);

//Inbuilt middlewares;
app.use(express.text());
app.use(express.json());
app.use(cors());


//Landing/default route;
app.get("/", async (req, res) => {
    const ip = req.ip;
    console.log(ip);
    res.send("Welcome in School-Listing App😊!!!");
});
//Different Routers for different frontend pages in UI;


//server code for start or live my server at defined port;
httpServer.listen(PORT, async () => {
    try {
        await connection;
        console.log("connected to DB");
    } catch (e) {
        console.log({ message: e.message });
    }
    console.log(`Server is running at port ${PORT}`);
});

