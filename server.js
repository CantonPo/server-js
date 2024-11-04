const express = require("express")
const { exec } = require('child_process');

//const comando = 'touch test.txt';
//const comando = 'echo "hola mundo" > test.txt';
//const comando = "ping -c 4 google.com"
//const comando = "figlet hola mundo"
const app = express()
const port = 3003

app.use(express.static("public"))

app.get("/", (req,res) => {
    exec(comando, (error, stdout, stderr) => {
        res.send(`<pre>${stdout}</pre>`)
      });
})

app.get("/ping", (req, res) => {
    const dominio = req.query.dominio
    const comando = "ping -c 4 " + dominio
    exec(comando, (error, stdout, stderr) => {
        res.send(stdout)
    });
})

app.listen(port, () => {
    console.log(`Servidor funcionando en ${port}`)
})