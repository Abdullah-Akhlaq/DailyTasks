// Develop a loop that prints numbers from 1 to 50 and identifies if they are odd or even.

// if statment
const isOddEven = (number) => {
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      console.log(index, "even");
    } else {
      console.log(index, "odd");
    }
  }
};

// switch
const isOddEvenSwitch = (number) => {
    for (let index = 1; index <= number; index++) {
      switch (true) {
        case index % 2 === 0:
          console.log(index, "even");
          break;
        default:
          console.log(index, "odd");
          break;
      }
    }
  };

// while loop
  const isOddEvenWhile = (min,max) => {
   while (min<=max) {
    switch (true) {
        case min % 2 === 0:
          console.log(min, "even");
          min=min+1
          break;
        default:
          console.log(min, "odd");
          min=min+1
          break;
      }
   }};
  
  
  isOddEvenWhile(1, 50);



  const arr= new Map([
    ["1","2"],
    ["3","4"],
    ["5","6"]
  ])
  arr.forEach((value,index)=>{
    console.log(index,value)
  })
  console.log(arr.get(1));
  