function randomNumberArr(max) {
    const res = new Array();

    for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * Math.floor(max));

        res.push(randomNumber);
    }

    return res;
}

function mapTest(arr) {
    let newArr = arr.slice();
    newArr.map(() => {
      newArr.pop();
    });
    return newArr;
  }
  
  let n = 100000;
  let testArray = Array.from({ length: n }, (_, index) => index); // Creating an array [0, 1, 2, ..., n-1]
  
  console.time(`mapTest(${n}): `);
  mapTest(testArray);
  console.timeEnd(`mapTest(${n}): `);
  