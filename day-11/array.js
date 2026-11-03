var stdList = ["Sakib", "Mahim", "Arafat", "Julfikar", "Afjal"]
// console.log(stdList[1])
stdList.push("Tamim", "Mushfiq")
stdList.pop()
stdList.unshift("Mahmudullah", "Miraz")
stdList.shift()
// console.log(stdList.length)
var oldStds = stdList.slice(1, 5)
// console.log(oldStds)
var badStds = stdList.splice(1, 4)
// console.log(stdList)
// console.log(badStds)

// for (var i = 0; i < badStds.length; i++) {
//     console.log(badStds[i]);
// }

function showData (val) {
    return val
}


var newData = stdList.map(showData)
console.log(newData);



