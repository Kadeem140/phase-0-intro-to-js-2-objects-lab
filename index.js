// Write your solution in this file!
const employee = {
    name: "Deem" ,
    streetAddess: "123 Fake drive"
}

//making a method to update employee's key and value
//What does it need? object, key and value arguments?
//non destructively
function updateEmployeeWithKeyAndValue(object, key, value){
    const obj = {...object} //undestructive copy.
    obj[key] = value
    return obj
}

//destructively 

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key){
    const obj = {...object}
    delete obj[key]
    return obj
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}