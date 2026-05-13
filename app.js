// lucky sevens

function lucky_sevens(arr) {
    // Check every 3 consecutive elements
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] + arr[i + 1] + arr[i + 2] === 7) {
            return true;
        }
    }
    
    return false;
}


// even index

function evenIndices(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result;
}

// unique categories

function uniqueCategories(arr) {
    let categories = [];

    for (let i = 0; i < arr.length; i++) {
        let category = arr[i][1];

        // Add only if not already present
        if (!categories.includes(category)) {
            categories.push(category);
        }
    }

    return categories;
}

// string sorting

function sortString(strArray) {
  // return the sorted array
  return strArray.sort();
}

// word reversals

function reverseWords(str){
    let words = str.split(" ");

    let reversed = words.map(word => word.split("").reverse().join(""));

    console.log(reversed.join(" "));
}

// multiple

const Multiple = (N, Arr) => {
  let result = [];

  for (let i = 0; i < N; i++) {
    let count = 0;

    for (let j = i + 1; j < N; j++) {
      if (Arr[j] % Arr[i] === 0) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
};

-------------------------------

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
