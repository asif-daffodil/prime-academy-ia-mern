if (6 > 4 && 5 === "5") {
    console.log("ha ha ha")
} else if (4 > 6 || 4 < 5) {
    if (6 >= 6) {
        console.log("he he he")
    } else {
        console.log("hu hu hu")
    }
} else {
    console.log("ho ho ho")
}

var age = 80

if (parseInt(age)) {
    if (age > 0) {
        if (age <= 12) {
            console.log("You are a baby")
        } else if (age <= 19) {
            console.log("You are a teenager")
        } else if (age <= 29) {
            console.log("You are a young person")
        } else if (age < 50) {
            console.log("You are a middle aged person")
        } else if (age < 130) {
            console.log("You are an old person")
        } else {
            console.log("You are not in this world")
        }
    } else {
        console.log("You are not in this world")
    }
}else {
    console.log("invalid input")
}

var day = new Date().toLocaleString("default", {weekday: "long"})

switch (day) {
    case "Sunday":
        console.log("Today is Sunday");
        break;

    case "Monday":
        console.log("Today is Monday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday");
        break;

    case "Wednesday":
        console.log("Today is Wednesday");
        break;

    case "Thursday":
        console.log("Today is Thursday");
        break;

    case "Friday":
        console.log("Today is Friday");
        break;

    case "Saturday":
        console.log("Today is Saturday");
        break;

    default:
        break;
}
