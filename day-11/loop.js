var x = 0
while (x < 10) {
    console.log("Ami vaat khai " + x++)
}

for (var i = 0; i < 10; i++) {
    console.log(i)
}

var g = 2
for (var i = 1; i <= 10; i++) {
    console.log(g + " x " + i + " = " + g*i)
}

for (var i = 0; i < 10; i++) {
    if ( i == 5) {
        continue
    }

    if (i == 7) {
        break
    }
    console.log(i);
}