const { exec } = require('child_process');
const app = express();
const PORT = 3002;

app.get("/ping", (req, res) => {
    const comando = "ping -c 4 mercadona.es"; // Asegúrate de que esta dirección sea correcta
    exec(comando, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send(`Error: ${error.message}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send(`stderr: ${stderr}`);
        }
        res.send(`<pre>${stdout}</pre>`); // Devuelve la salida del comando
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});