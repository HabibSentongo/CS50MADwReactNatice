const person = {
    name: "habib",
    greet: function() {console.log("Hi " + this.name)},
}

person.greet() // this will use habib as name

const friend = {
    name: "shamirah",
}

friend.greet = person.greet
friend.greet() // this will use shamirah as name 

const greeting = person.greet
greeting() // this will have undefined name, because greeting is not bound to any object

// to solve the problem on line 16, we can use bind(), call(), or apply()

const greetings = person.greet.bind(friend) // this will bind greetings fn to friend object
greetings() // this will now use shamirah as name. bind() returns a new fn which can then be called later

// call() and apply() make the function call immediately, see below
person.greet.call(friend)
person.greet.apply(friend)

