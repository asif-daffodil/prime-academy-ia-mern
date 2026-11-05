// let & const

let x = 10
x = 12
x = 14

const y = 202
// console.log(y)

// Arrow function
/*
    const stdInfo = function (name) {
        return name
    }

    const stdInfo = (name) => {
        return name
    }

    const stdInfo = (name) => name

    const stdInfo = name => name
*/

// Template Literal
const name = "Afjal"
const age = 22
// console.log(name + " lives in demra ane his age is " + age)
// console.log(`${name} lives in demra ane his age is ${age}`)

// Destructuring
const stdList = ["Afjal", "Sakib", "Yasin", "Jukfikar"]
/*
    const std1 = stdList[0]
    const std2 = stdList[1]
    const std3 = stdList[2]
    const std4 = stdList[3]
*/
const [std1, std2,,std4] = stdList

// console.log(std4)

const stdInfo = {
    sName: "Sakib",
    gender: "Male",
    city: "Shonarga",
    sAge: 24,
    isMarried: false,
    behavious: function () {
        return "Angry man"
    }
}

/*
    const sName = stdInfo.sName
    const gender = stdInfo.gender
    const city = stdInfo.city
    const sAge = stdInfo.sAge
    const isMarried = stdInfo.isMarried
*/

const { sName, city:shohor, gender} = stdInfo
// console.log(shohor)


// Spread & Rest Operator
const numbers1 = [1, 2, 3]
const newNumbers = [...numbers1, 4, 5, 6]

// console.log(newNumbers);
const [s1, s2, ...std] = stdList
// console.log(std)

const showPara = (...p) => p
// console.log(showPara(2, 3, 4))

// Class

class stdClass {
    name = "Yasin"
    behaviour = function () {
        return "Valo"
    }
}

const stdObj = new stdClass

// console.log(stdObj.name)

// Module

// for...of for...in

/*
    for (const n of stdList) {
        console.log(n);
    }
*/

for (const key in stdInfo) {
    console.log(key)
}



