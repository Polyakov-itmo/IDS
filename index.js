const express = require('express')
const app = express()

const PORT = 3000

let COUNTER = 0;

try {
  app.listen(PORT, () => {
    console.log(`START SERVER. LINK: http://localhost:${PORT}`)
  })
} catch (e) {
  console.log(e)
}

app.get('/', (req, res) => {
  res.send(JSON.stringify(COUNTER))
})

app.get('/stat', (req, res) => {
  COUNTER +=1;
  res.end(JSON.stringify(COUNTER))
})

app.get('/about', (req, res) => {
  const name = "Polyakov Maxim, P41091";
  const html = `<h3>Hello, ${name}!</h3>`;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
})