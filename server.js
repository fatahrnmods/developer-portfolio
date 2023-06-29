const http = require('http');
const path = require('path');
const port = 3000; // Ganti dengan port yang Anda inginkan

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Mengatur direktori root proyek Anda di bawah ini
    const filePath = path.join(__dirname, '/storage/emulated/0/projek/developer-portfolio-template/', 'index.html');

    // Mengirim file HTML sebagai respons
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fs.readFileSync(filePath));
  }
});

server.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
