// this  is to  test my understanding of the execution stack and event loop
let x = 0
function stackOverflow(){
    x+=1
    console.log("Recursion "+ x)
    return stackOverflow()
}

stackOverflow()