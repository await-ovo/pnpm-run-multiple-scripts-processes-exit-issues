import { createServer } from 'http';

const server = createServer();

console.log(`[node] process pid:`, process.pid)

server.listen(9999, (err) => {
  if (err) {
    console.log(`[node] dev error:`, err)
  }
  console.log(`[node] server listen on 9999`)
  setTimeout(() => {
    throw new Error('[node] server error, Oops')
  }, 2000)
})