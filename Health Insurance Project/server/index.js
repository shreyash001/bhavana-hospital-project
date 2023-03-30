const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("This is Hospital Insurance Backend");
});

const CONNECTION_URL = "mongodb+srv://admin:admin@cluster0.iqslqdn.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology: true}).then(
    app.listen(PORT, () => {
        console.log(`Connected on port ${PORT}`)
        console.log("Database Connected ")
    })
    
).catch(
    (err) => {
        console.log(err)
    }
)