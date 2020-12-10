// line 8 will print the final value of i
// because i was declared with var which has a lexical scoping

// the closure usage on line 17 will also print the final value of i
// same reason lexical scoping, so i is accessible until the end of its housing function
// so this creates a closure bug
function arrPopulate(array){
    const arr = []

    for(var i=0; i<5; i++){
        arr.push(function(){ console.log(i)})
    }
    console.log(i)

    return arr
}

const functionArr = arrPopulate()

functionArr[0]()

// using let to declare i resolves the  closure bug at line 36
function arrPopulate2(array){
    const arr = []

    for(let i=0; i<5; i++){
        arr.push(function(){ console.log(i)})
    }
    // console.log(i) // errors due to i being a let which has block scoping

    return arr
}

const functionArr2 = arrPopulate2()

functionArr2[0]()

// another way of resolving the closure bug is using an IIFE
// IIFE = Immediately Invoked Function Experession
function arrPopulate3(array){
    const arr = []

    for(var i=0; i<5; i++){
        arr.push((function(j){
            return function(){ console.log(j)}
        })(i))
    }
    console.log(i)

    return arr
}

const functionArr3 = arrPopulate3()

functionArr3[0]()