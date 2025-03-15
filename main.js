const readline = require('readline-sync');

//Initialize shot data array; "Building Arrays" and "Values, Data Types, and Operations" skills
let shotData = [
    [2021,10,20,23,25,33,21],
    [2020,7,12,19,14,25,38],
    [2022,2,13,21,33,18,37],
    [2023,5,6,4,25,30,38],
    [2024,3,5,19,14,1,28],
    [2021,2,7,3,30,29,34],
    [2023,3,1,16,37,59,26],
    [2021,3,8,1,55,49,37],
    [2022,1,11,8,53,28,34],
    [2024,8,16,16,57,55,37],
    [2024,7,9,12,57,44,24],
    [2020,7,19,22,40,12,29],
    [2021,12,5,10,45,27,31],
    [2023,6,7,12,11,42,17],
    [2022,10,22,10,58,45,25],
    [2021,5,20,11,19,55,39],
    [2022,12,18,1,60,5,30],
    [2020,7,22,20,43,12,34],
    [2023,11,20,18,54,18,22],
    [2022,9,21,7,58,60,33],
    [2023,3,12,23,41,51,21],
    [2024,5,6,13,4,31,38],
    [2020,6,18,21,32,59,40],
    [2023,2,11,3,58,27,36],
    [2020,9,16,7,16,5,37],
    [2024,8,6,21,24,33,36],
    [2023,1,27,9,16,12,17],
    [2020,1,5,23,22,48,30],
    [2024,2,5,19,22,51,25]
];

//Assign array index names to variables; "Values, Data Types, and Operations" skill
let yearIndex = 0;
let monthIndex = 1;
let dayIndex = 2;
let hourIndex = 3;
let minuteIndex = 4;
let secondsIndex = 5;
let shotTimeIndex = 6;

//Remove shots of less than 20 seconds from array; "Control Structures and Logic" and "Working with Loops" skills
for (let i = 0; i < shotData.length; i++) {
    if (shotData[i][shotTimeIndex] < 20) {
        shotData.splice(i,1); //"Using Arrays" skill
    }
}

//Assign new array index names to variables; "Values, Data Types, and Operations" skill
let datestampIndex = 7;
let timestampIndex = 8;

//Add datestamp and timestamp strings to array; "Stringing Characters Together," "Working with Loops," and "Using Arrays" skills
for (let j = 0; j < shotData.length; j++) {
    shotData[j].push(`${shotData[j][monthIndex]}-${shotData[j][dayIndex]}-${shotData[j][yearIndex]}`);
    shotData[j].push(`${shotData[j][hourIndex]}:${shotData[j][minuteIndex]}:${shotData[j][secondsIndex]}`);
}

//Sort table by date; "Using Arrays" skill
shotData.sort();

//Display table; "Stringing Characters Together" and "Working with Loops" skills
console.log(`Date       Time        Shot Time`);
for (let k = 0; k < shotData.length; k++) {
    console.log(`${shotData[k][datestampIndex]}     ${shotData[k][timestampIndex]}      ${shotData[k][shotTimeIndex]} seconds`);
}

let avgShot = 0;
for (let m = 0; m < shotData.length; m++) {
    avgShot += shotData[m][shotTimeIndex];
}
avgShot /= shotData.length;
console.log(`\nAverage shot: ${avgShot} seconds\n`);

//Ask user to enter a year
let userYear = readline.questionInt("What year would you like to display? ");
//Return message if no data; "Stringing Characters Together" and "Control Structures and Logic" skills
if (userYear < 2020 || userYear > 2024) {
    console.log(`Sorry, no data from ${userYear}!`);
} else {
//Display table with entries from user-defined year; "Stringing Characters Together," "Control Structures and Logic," and "Working with Loops" skills
    console.log(`Date       Time        Shot Time`);
    for (let l = 0; l < shotData.length; l++) {
        if (shotData[l][yearIndex] === userYear) {
            console.log(`${shotData[l][datestampIndex]}     ${shotData[l][timestampIndex]}      ${shotData[l][shotTimeIndex]} seconds`);
        }
    }
}