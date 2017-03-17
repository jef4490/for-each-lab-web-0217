function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
};

function iterate(callback) {
  rush_array = ["Tom Sawyer", "Limelight", "YYZ"]
  rush_array.forEach(callback)
  return rush_array;
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array;
}
