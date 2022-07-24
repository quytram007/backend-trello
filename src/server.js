import express from 'express'
import 'dotenv/config'
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send('hello')
})
app.listen(port, () => {
    console.log("Backend is runing on port " + port);
})