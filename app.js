// filter band

function filterBands(arr, genre) {
  return arr.filter(band => band.genre === genre);
}

// as basic datatypes 2

function printCount(a, b, c) {
  let count = 0;
  if (a < 0) count++;
  if (b < 0) count++;
  if (c < 0) count++;
  return count;
}

// recursively print numbers

function printTillN(N, i) {
  if (i > N) {
    return;
  }
  process.stdout.write(i + " ");
  printTillN(N, i + 1);
}

// nth even fibonacci number

function NthEvenFibonacci(n) {

  const MOD = 1000000007;

  let a = 1;
  let b = 1;
  let count = 0;

  while (true) {
    let c = (a + b) % MOD;

    if (c % 2 === 0) {
      count++;

      if (count === n) {
        return c;
      }
    }

    a = b;
    b = c;
  }
}

// unread books tracker

function getInfo(obj) {

  for (let i = 0; i < obj.length; i++) {

    if (obj[i].readingStatus === false) {
      console.log(obj[i].title + " - " + obj[i].author);
    }

  }

}

// dish price

function totalPrice(arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][2];
  }

  return sum;
}

// bubble sort

function bubbleSort(N, arr) {

  for (let i = 0; i < N - 1; i++) {

    for (let j = 0; j < N - i - 1; j++) {

      if (arr[j] > arr[j + 1]) {

        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

      }

    }

  }

}