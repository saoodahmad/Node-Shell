# Node-Shell
Toy shell written in node.js

## Installation

In the root of the project run the following commands

```bash
  node shell.js
```

## Features

- [x] user's home directory set as current working directory by default
- [x] ls <directory_name> command
- [x] pwd command
- [x] cd <directory_name> command
- [x] exit 
- [x] <path_to_binary> <args> command (spawn child process)
- [ ] fg <pid> command (err: no job control)
- [x] Ctrl + C (SIGINT) terminates spawned process 
- [ ] Ctrl + Z to send process to background (err: no job control) 


## References

- [https://www.freecodecamp.org](https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/)
- [medium.com](https://medium.com/@gkverma1094/child-process-in-nodejs-b2cd17c76830)
- [nodejs.org](https://nodejs.org/api/process.html)