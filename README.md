# Reproduce pnpm run multiple scripts child process does not exit issue

## Environment
* OS: macOS 11.7.4 20G1120 x86_64
* Node.js: v16.15.1
* pnpm: v7.29.0


## Steps

1. `git clone git@github.com:await-ovo/pnpm-run-multiple-scripts-processes-exit-issues.git`
2. `cd pnpm-run-multiple-scripts-processes-exit-issues`
3. `pnpm run "/^dev:.*/"`

You can see that the node and web servers start on port `9999` and `9990` separately, and after waiting for 1 second, the node server throws an exception, then pnpm run process is exited.

But if you run `lsof -i:9990`, you can see that web server process doesn't exited:

```
$ lsof -i:9990    
COMMAND   PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    98962 await-ovo   22u  IPv6 0x9fd9ab4f570298fd      0t0  TCP *:osm-appsrvr (LISTEN)
```


