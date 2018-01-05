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
  for (var i = 0; i < 25; i++) {
    var s = `I am ${i} strange loops.`
    array = [...array, s]
    array
    }
    return array;
  }
