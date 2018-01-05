function doWhileLoop(array){
  function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
  
} while (maybeTrue() && array.length > 0);
}