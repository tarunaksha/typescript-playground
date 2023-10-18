// enum SeatChoice {
//     WINDOW = 10,
//     MIDDLE = 20,
//     AISLE, // 21
//     FOURTH //22
// }

// enum SeatChoice { //this will generate crazy amount of iife code in js
//   WINDOW = "window",
//   MIDDLE = "midddle",
//   AISLE = "aisle",
//   FOURTH = 0,
// }
const enum SeatChoice { //adding a const won't generate crazy amount of js code now
  WINDOW = "window",    // try it in the ts playground online
  MIDDLE = "midddle",
  AISLE = "aisle",
  FOURTH = 0,
}
const mySeat = SeatChoice.AISLE;
