export const objectToArray = (object) => {
  var arr = [];
  for (var key in object) {
      if (object.hasOwnProperty(key)) {
          arr.push(object[key]);
      }
  };
  return arr;
};
