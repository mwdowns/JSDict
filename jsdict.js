// var phonebookDict = {
//   Alice: '770-000-9999',
//   Bob: '888-999-7777',
//   Elizabeth: '555-444-3333'
// };
//
// console.log(phonebookDict.Elizabeth);
// phonebookDict.Matt = '222-555-7777';
// console.log(phonebookDict);
// delete phonebookDict.Alice;
// console.log(phonebookDict);
// phonebookDict.Bob = '444-000-8888';
// console.log(phonebookDict);

// var stuff = 'hello';
// var letter = stuff.slice(0, 1);
// console.log(stuff);
// console.log(letter);
// console.log(stuff);

function histogram(string) {
  var tally = {};
  for (var i = 0; i < string.length; i++) {
    var letter = string.slice(i, (i + 1));
    if (letter in tally) {
      tally[letter] += 1;
    } else {
      tally[letter] = 1;
    }
  }
  var sortable = [];
  for (var char in tally) {
    sortable.push([char, tally[char]]);
    }
  sortable.sort(
    function(a, b)
      {return b[1] - a[1]}
  );
  topTwo = sortable.slice(0, 2);
  console.log(topTwo);
}

histogram('superkalafragalicsticexpialidocious');
