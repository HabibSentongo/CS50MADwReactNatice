const o1 = {
    a: "a",
    b: "b",
    obj: {
        key: "key",
    },
}

// store by ref
const o2 = o1
o1.b = "c"
console.log(o2.b) // this should print c since o2 is stored as a reference of o1

// store by value
    // shallow copy
const o3 = Object.assign({},o1) // this makes o3 a shallow copy of o1, so the inner object will still be stored by ref
o1.b = "d"
o1.obj.key = "z"

console.log(o3.b) // this should print c which was the actual value before o3 was created
console.log(o3.obj.key) // this should print z since the inner object obj is still stored as a ref of o1.obj

    // deep copy
function deepCopy(obj){
    const keys = Object.keys(obj)
    const newObj = {}

    for(let i = 0; i<keys.length; i++){
        const key = keys[i]
        if(typeof obj[key] === "object"){
            newObj[key] = deepCopy(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }

    return newObj

}

o4 = deepCopy(o1)

o1.b = "k" // now we mutate the old obj
o1.obj.key = "new key"

console.log(o4.b) // this should print d instead of k
console.log(o4.obj.key) // this should print z instead of "new key"
