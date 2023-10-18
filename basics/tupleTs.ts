let tupUser: [string,number,boolean]
tupUser = ["tarun",100,true]

type User = [number,string]
const newUser: User = [10,'tarun']
newUser[1] = 'anita'
// newUser.push(true) //they fixed this issue of not detecting this weird behaviour