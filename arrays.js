console.log('hello');

// Exercise #1

var test1 = 'cat';
var test1opp = test1.split('').reverse().join('');
if (test1 === test1opp) {
    console.log(true);
} else {
    console.log("test1:", false);
};

var test2 = 'racecar';
var test2opp = test2.split('').reverse().join('');
if (test2 === test2opp) {
    console.log("test2:", true);
} else {
    console.log("test2:", false);
};

var test3 = 'bear';
var test3opp = test3.split('').reverse().join('');
if (test3 === test3opp) {
    console.log("test3:", true);
} else {
    console.log("test3:", false);
};

var test4 = 'mom';
var test4opp = test4.split('').reverse().join('');
if (test4 === test4opp) {
    console.log("test4:", true);
} else {
    console.log("test4:", false);
};


var animals = ['fish', 'dog', 'cat'];
var animalzElement = document.getElementById('animalz');
for (var i=0; i<animals.length; i++) {
    // console.log("animals:", animals[i]);
    animalzElement.innerHTML += '<h5>' + animals[i] + '</h5>';
}

var book1 = 'Catch 22';
// var bookSplit = book1.split('');
// var realNumz = [];
// for (var j=0; j<bookSplit.length; j++) {
//     if (bookSplit[j]*1) {
//      realNumz.push(bookSplit[j]);
//     }
// }
// console.log("answer:", realNumz.join(''));
var book1num = book1.replace(/\D/g,'');
console.log("book1num:", book1num);
var book2 = 'Slaughterhouse 5';
var book2num = book2.replace(/\D/g,'');
console.log("book2num:", book2num);
var book3 = 'Fahrenheit 451';
var book3num = book3.replace(/\D/g,'');
console.log("book3num:", book3num);
