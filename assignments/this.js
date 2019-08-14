/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The Window binding is when you console.log 'this' in the global scope it will point to the window.
* 2. Implicit binding is when a function is called by dot notation, the object before that dot is 'this'
* 3. New Binding: When the 'new' keyword is used JS will treat the function as a class contructor. Whenever a constructor function is used, 
    'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding: when we use .call() and .apply() to override what the 'this' keyword points to 
*
* write out a code example of each explanation above
*/

// Principle 1 (Window Binding)

function sayHello (name){
    console.log(this)
    return name;
}
sayHello('Miley');

// Principle 2 (Implicit Binding)
 
let user = {
    username: 'miley_wright',
    password: 'abc123',
    saysHi: function (){
        console.log(this.username)
    }
}

user.saysHi();

// Principle 3 (New Binding)

function User(name, username, password){
    this.name = name;
    this.username = username;
    this.password = password;
    this.login = function(){
        console.log(`${this.name}'s username: ${this.username} and password: ${this.password}`)
    }
}

const miley = new User('Miley', 'miley_wright', 'abc123')

miley.login();

// Principle 4 (Explicit Binding)

const fred = new User('Fred', 'fred_12', '123abc')
miley.login.call(fred)

