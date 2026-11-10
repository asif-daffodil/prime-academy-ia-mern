const stdInfo = {
    sName : "Afjal",
    age : 20,
    isMarried : false,
    bestFriend : ["Julfikar", "Yeasin", "Sakib"],
    address : function () {
        return "Demra Dhaka"
    },
    familyInfo : {
        father: "Abdul Barik",
        mother: "Rehana Akter",
        totalSiblings: 4,
        serial: 4
    }
}

/*
    console.log(stdInfo.sName)
    console.log(stdInfo["age"])
    console.log(stdInfo.address())
    console.log(stdInfo?.familyInfo?.father)
*/

const stdJson = JSON.stringify(stdInfo)
console.log(stdJson)

// JSON.parse()