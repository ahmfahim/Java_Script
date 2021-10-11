// var myName = "Fahim";
// if(myName === 'Fahim'){
//     console.log('Allowed!');
// }else{
//     console.log('Not allowed!');
// }

// var num = 10;
// do {
//     console.log('Inside the loop, num is ' + num);
//     num += 1;
// } while (num < 20);
// console.log('Outside the loop');

// var myArray = ['fahim', 'Mohim','tamanna', 'akash'];
// myArray.push("Mithila");
// myArray.shift();
// myArray.unshift('Fahim');
// myArray.pop();
// var locationOfName = myArray.indexOf("tamanna");
// console.log(locationOfName);

// myArray.splice(2,3)

// for(var i=0;i<myArray.length;i++){
//     console.log(myArray[i]);
// }

// var numberList = [1,2,3,4,5,6,7,8,9];

// var spliceNumberList = numberList.splice(4);

// console.log("number List",numberList);
// console.log("Splice number list",spliceNumberList);

// var rahim = {
//     fullName: 'rahim',
//     age: 34,
//     address: 'Bogura',
//     job:'Software Engineer'
// }
// console.log(rahim)

// function

function welcomeMessage(name) {
    console.log("Welcome Mr." + name);
    return function menuOptions(menu) {
        console.log("Do you like " + menu + " Mr." + name);
    }
}
welcomeMessage('Fahim')('Coffe');