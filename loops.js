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
    if (i === 1) {
      var s = `I am ${i} strange loop.`
    }else {
      var s = `I am ${i} strange looops.`
    }
    array = [...array, s]
    array;
    }

    return array;
  }
