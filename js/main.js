 console.log('Test');

//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years.
*/

// Create our Person Prototype (Person class)
class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    showInfo(person){
        console.log(`This person's name is ${this.name} and they are ${this.age} years old!`)
    }
    addAge(age){
        this.age += 1
        console.log(`This person's name is ${this.name} and they are now ${this.age} years old!`)
    }
}
const fratelli = new Person('Fratelli', 7);
const ronnie = new Person('Ronnie',2)

// create the printInfo method
ronnie.showInfo(ronnie);
fratelli.showInfo(fratelli);


// Create another method for the addAge method

fratelli.addAge(7);
ronnie.addAge(2);




//=======Exercise #2=========//

/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */


// function replaceEvens(arr){
//     //code goes here
//     // first I need to iterate through the array
//     for (let i =1; i < arr.length; i++ ){
//         if(arr[i] % 2 === 0){
//             arr.splice(i,1,'even index');
           
//         }return arr
//     }  
// }
//replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]);

function replaceEvens(arr){
    //code goes here
    // first I need to iterate through the array
    for (let i =0; i < arr.length; i++ ){
        if(i % 2 === 0){
            arr.splice(i,1,'even index');
           
        }
    }  return arr
}
console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]