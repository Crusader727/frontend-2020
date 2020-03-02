function rem(item) { 
  if (typeof item === "number") { 
  item *= this; 
  } 
  return item; 
  } 
  function multiplyArray(arr, n)
  {
    
  console.log(arr.map(rem,n));
  }
    
  multiplyArray([1, 2, 3, 'ddd', {min: 1}, 22, false], 2);
