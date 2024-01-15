//REGEX important

let pattern = 'pw'

let regex1 = new RegExp(pattern)

let flag = 'gi' // g and i flag

let regex2 = new RegExp(pattern, flag)


let regex3 = /hi/gi // new method to create regex

const strtocheck = "Pw is rowing at rapid speed and recently they are working on pwskills to create skills based pwcontent"

const result = regex3.test(strtocheck) //is pw is present in string or not
console.log(result)
