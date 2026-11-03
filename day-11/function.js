function myInfo (name, fullAddress) {
    return "My name is " + name + " and my address is : " + fullAddress()
}

console.log(myInfo("Afjal", function () {
    return "9, Sher-E-Bangla road, Hazaribagh, Dhaka-1209"
}))

// recursion 
function top2Bottom (n) {
    if (n == 1) {
        return 1
    }
    return n * top2Bottom(n - 1)
}

console.log(top2Bottom(5))