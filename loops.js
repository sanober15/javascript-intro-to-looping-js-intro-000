function doWhileLoop(array){
  function maybeTrue() {
  return array.pop()

}

do {
  console.log('doo-bee-doo-bee-doo')

} while (maybeTrue() && array.length > 0);
array;
}


function forLoop(array){
var s = ""
  for (var i = 0; i < 25; i++) {
    if (i === 1) {
       s = `I am ${i} strange loop.`
    }else {
      s = `I am ${i} strange loops.`
    }
    array = [...array, s]
    array
    }

    return array;
  }


function whileLoop(n){
  while (n >= 0) {
  console.log(--n)

}
return console.log('done');

}
