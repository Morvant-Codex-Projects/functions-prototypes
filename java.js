function Person (name, age, eyeColor, hasPets ) {
    this.name = name; //string
    this.age = age; //number
    this.eyeColor = eyeColor; //string
    this.hasPets = hasPets; //boolean
}


const myFriend = new Person("Alice", 30, "green", true);

console.log(`Hello ${myFriend.name} welcome to ${myFriend.age}!`);

console.log(myFriend);