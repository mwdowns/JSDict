

var numbers = [4, 9, -2, 3, -5, 11, 42, -75, 28];

function evenSort(n) {
  return n % 2 === 0;
}

function positiveSort(n) {
  return n > 0;
}

function squared(n) {
  return n * n;
}

var even = numbers.filter(evenSort);
var posititve = numbers.filter(positiveSort);
var square = numbers.map(squared);

// console.log(even);
// console.log(posititve);
// console.log(square);


var cities = [
  { name: 'Los Angeles', temperature: 60.0 },
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function cold(cities) {
  return cities.temperature < 70.0;
}

function array(cities) {
  return cities.name;
}

var coldCities = cities.filter(cold);
var citiesArray = cities.map(array);

// console.log(coldCities);
// console.log(citiesArray);

var people = [
  'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John'
];

function goodJob(people) {
  console.log('Good job, ' + people);
}

function compareNumber(a, b) {
  return a.length - b.length;
}



// people.forEach(goodJob);
// console.log(people.sort());
// console.log(people.sort(compareNumber));

var arr = [[1, 3, 4], [3, 6], [2, 4, 6, 8]];

function sumArray(arr) {
  var combine = function(a, b) {
    return a - b;
  };
  return arr.reduce(combine, 0);
}

// console.log(arr.sort(sumArray));

function hello() {
  console.log('Hello everybody!');
}

function call3Times(fun) {
  fun();
  fun();
  fun();
}

// call3Times(hello);

function callNtimes(number, fun) {
  while (number > 0) {
    fun();
    number --;
  }
}

// callNtimes(7, hello);

function sum(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }, 0);
}

console.log(sum([3, 5, 8]));

var input = ['fudged', 'up', 'beyond', 'all', 'recognition'];

function accronym(array) {
  var joined = [];
  joined = array.slice(0, 1);
}

var output = input.forEach(accronym);

console.log(output);
