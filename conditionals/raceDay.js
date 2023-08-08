let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber)

let isRacerRegisteredEarly = false;
let racerAge = 19;


if (racerAge >= 18 && isRacerRegisteredEarly) {
  raceNumber += 1000;
}

console.log(raceNumber)

if (racerAge > 18 && isRacerRegisteredEarly) {
  console.log(`Racer number ${raceNumber}, you race start time is 9:30AM`)
} else if (racerAge > 18 && !isRacerRegisteredEarly) {
  console.log(`Racer number ${raceNumber}, you race start time is 11:00AM`)
} else if (racerAge < 18) {
  console.log(`Racer number ${raceNumber}, you race start time is 12:30PM`)
} else if (racerAge === 18) {
  console.log('Please see registration desk!')
}
