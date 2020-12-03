const reverseString = (str) => str.split("").reverse().join("")
const isPalindrome = (str) => str === str.split("").reverse().join("")
const reverseInt = int => Number((int+"").split("").reverse().join(""))

const capitalizeLetters = str => str.split(' ').reduce((acc, word) => 
                                acc + word[0].toUpperCase() + word.substring(1) + ' ', '')
                                .trim()

const maxCharacter = str => {
    const map = {}
    str.split("").forEach(ltr => {
            map[ltr] = map.hasOwnProperty(ltr) ? map[ltr] + 1 : 1        
})
    return Object.entries(map).sort((a,b) => b[1] - a[1])[0][0]
}                                

let fibMap = {
    1: 1,
    2: 1,
}

const fibonacci = num => {
    if(fibMap.hasOwnProperty(num)) return fibMap[num]
    fibMap[num] = fibonacci(num - 1) + fibonacci(num - 2)
    return fibMap[num]
}

for(let i = 1; i <= 20; i++) {
    console.log(fibonacci(i))
}