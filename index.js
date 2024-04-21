const express = require("express")

const app = express()

// express
app.get("/", function (req, res) {
    // console.log(req.body)
    res.send("waaa")
})


app.listen(3000, () => {
    console.log("Express server is running on port 3000")
})
