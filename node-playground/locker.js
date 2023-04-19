const count = 10000;

function countOpened(lockers) {
  const count = lockers.reduce((accumulator, currentValue) => {
    if (currentValue === true) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
  
  return count;
}

function openClose(lockers, number) {
  for (let i = 0; i < count; i++) {
    if ((i + 1) % number == 0) {
      lockers[i] = !lockers[i];
    }
  }
}

function main() {
  const lockers = new Array(count).fill(false);

  for(let i=1; i<=count; i++) {
    openClose(lockers, i)
  }

  console.log(lockers, countOpened(lockers));
}

main();
