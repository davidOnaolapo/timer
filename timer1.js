const sortArray = (arr) => {
  const length = arr.length;
  let sorted = false;

  if (length === 0) {
    return null;
  }
  //sort arr
  while (!sorted) {
    let swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      sorted = true;
    }
  }
  return arr;
};

const validateInput = (timesArr) => {
  let usefulArr = [];

  timesArr = timesArr.map(arg => 
    Number(arg)
  );
  for(let val of timesArr) {
    if (val < 0 || val !== val) {
      continue;
    } else {
      usefulArr.push(val);
    }
  }
  if (usefulArr.length === 0 ) {
    return 0;
  };
  return usefulArr;
}

const timer1 = () => {
  let timer = 0;
  let times = validateInput(process.argv.slice(2));
  if(!times) {
    return;
  } else {
    times = sortArray(times);
    console.log(times);
    timer = times[0] * 1000;
  }
  
  for ( let i = 0; i < times.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
    timer += times[i+1]*1000
  }
}

timer1();