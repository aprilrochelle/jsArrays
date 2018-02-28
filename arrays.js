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
    console.log("test4:" true);
} else {
    console.log("test4:", false);
}
