const greeting = function (name) {
    return `Hi, ${name}`
}

// Arrow function - explicit return 

const newGreeting = (name) => {
    return `Hi, ${name}`
}

// Arrow function - implicit return 

const newGreetingImplicit = name => `Hi, ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`)
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction('Marichell se duerme en todos lados.')
finctionalCharacter.messageWithArrowFunction('SuperMan es alto.')