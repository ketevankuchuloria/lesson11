// 1
let cars = ["audi","bmw", "lexus", "volkswagen", " porsche"]; 

for (i=2; i < 5; i++){
console.log (cars[i]);
}

// 2

let names = ['john', 'lea', 'anastasia', 'lee'];

for (i=0; i < names.length; i++) {
    if (names[i] > 3) {
        console.log(names[i]);
    }
}

// 3
let numbers = [ 3, 5, 6, 84, 24, 95];

for (i=0; i < numbers.length; i++) {
    if (numbers [i] % 2 == 0) {
        console.log (numbers[i]);
    }
}

let numbers = [ 3, 5, 6, 84, 24, 95];

for (i=0; i < numbers.length; i++) {
    if (numbers [i] % 2 == 1) {
        console.log (numbers[i]);
    }
}


// 4

let user = [‘name’, ‘age, 25, 50, ‘surname’, [100, 500] ];

console.log [user [5][1]];

// 5


var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
  };

  console.log (person.eyecolor);


//   6

 let numbers = [1, 5, 44, 75, 234, 531];

 for (let i=0; i < numbers.length; i++) {
     console.log(numbers[i])
 }

//  7

let x = [5, 25, 89, 120,36];

x.push ('javascript', 'phyton');
x.unshift ('html', 'css');

console.log(x);

