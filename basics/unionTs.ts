let score: number | string 
score = 100
score = "100"

type User = {
    name: string,
    id: number
}
type Admin = {
    username: string,
    id: number
}
let tarun: User | Admin = {name:"tarun",id:12}
tarun = {username:"tarun",id:12}

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }
// getDbId(10)

getDbId(10)
getDbId("abc")
function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toUpperCase()
    }
}

const data: (number | string | boolean)[] = [1,2,3,'4','abc',true]
let PI: 3.14 = 3.14
// PI = 10  // error 
let seatAllotment: 'aisle' | 'middle' | 'window'
// seatAllotment = 'crew' //error