// Object Copntructor function
// regular function with New key word
// create many objects.

function Home(rooms, appartment, color, swimmingPool, state, city) {
    this.rooms = rooms;
    this.appartment = appartment;
    this.color = color;
    this.swimmingPool = swimmingPool;
    this.state = state;
    this.city = city;
}

var home1 = new Home(4, false, 'brown', true, 'pakistan', 'hyderabad')
console.log(home1)


// challenge 
// create books with object literal notation 
// create libary with object constructor function
// create 5 instance of books