//print array recursively

function printArrayRecursive(arr, i, n) {
  if (i >= n) {
    return;
  }

  process.stdout.write(arr[i] + " ");

  printArrayRecursive(arr, i + 1, Number(n));
}

//print range recursively

function printXY(x, y) {
  if (x > y) {
    return;
  }

  process.stdout.write(x + (x === y ? "" : " "));

  printXY(x + 1, y);
}

//time conversion

function timeConversion(s) {
  let period = s.slice(-2); // AM or PM
  let time = s.slice(0, 8).split(":");

  let hour = parseInt(time[0]);

  if (period === "AM") {
    if (hour === 12) {
      hour = "00";
    } else {
      hour = hour.toString().padStart(2, "0");
    }
  } else { // PM
    if (hour !== 12) {
      hour = (hour + 12).toString();
    } else {
      hour = "12";
    }
  }

  console.log(`${hour}:${time[1]}:${time[2]}`);
}


//palindrome number checker

readline.question('', n => {
  let reversed = n.split('').reverse().join('');
  
  console.log(n === reversed ? "true" : "false");
  
  readline.close();
});


//reverse string word wise

function reverseWords(s) {
    return s.trim().split(" ").reverse().join(" ");
}

//count pairs with difference k

function Pairs(arr, k) {
  let set = new Set(arr);
  let count = 0;

  for (let num of arr) {
    if (set.has(num + k)) {
      count++;
    }
  }

  return count;
}

//js dynamic function input

function takeMultipleNumbersAndAdd(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

//Case-Specific Sorting

function sortCase(S) {
  let upper = [];
  let lower = [];

  for (let ch of S) {
    if (ch >= 'A' && ch <= 'Z') {
      upper.push(ch);
    } else {
      lower.push(ch);
    }
  }

  upper.sort();
  lower.sort();

  let result = "";
  let u = 0, l = 0;

  for (let ch of S) {
    if (ch >= 'A' && ch <= 'Z') {
      result += upper[u++];
    } else {
      result += lower[l++];
    }
  }

  return result;
}

// Replace element

function replaceArray(arr, n) {
  if (n === 1) return [arr[0]];

  let result = new Array(n);

  result[0] = arr[0] * arr[1];

  for (let i = 1; i < n - 1; i++) {
    result[i] = arr[i - 1] * arr[i + 1];
  }

  result[n - 1] = arr[n - 1] * arr[n - 2];

  return result;
}

-----------------------
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
