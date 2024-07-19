// Tasks

// task-1
let browserName = "bottle"
if (browserName == "Edge") {
    console.log("You've got the edge");
} else if (browserName == "Chrome" || browserName == "Firefox" || browserName == "Safari" || browserName == "Opera") {
    console.log("Okay we support these browsers too");
} else {
    console.log("Switch to brave b1tch");
}

// task-2
let a = 2
switch (a) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2, 3');
        break;
}