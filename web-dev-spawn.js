import { createServer } from 'http';

const server = createServer();

console.log(`[web] process pid:`, process.pid)

server.listen(9990, (err) => {
  if (err) {
    console.log(`[web] dev error:`, err)
  }
  console.log(`[web] server listen on 9990`)
})